import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from "react";

interface ProfileData {
  name: string;
  checkedItems: Record<string, string[]>; // kitId -> item names
  activeKits: string[];
  completedKits: string[];
  startedAt: Record<string, string>; // kitId -> ISO date
}

const DEFAULT_PROFILE: ProfileData = {
  name: "",
  checkedItems: {},
  activeKits: [],
  completedKits: [],
  startedAt: {},
};

const STORAGE_KEY = "habitkit-profile";

function loadProfile(): ProfileData {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return { ...DEFAULT_PROFILE, ...JSON.parse(raw) };
  } catch {}
  return DEFAULT_PROFILE;
}

function saveProfile(data: ProfileData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

interface ProfileContextValue {
  profile: ProfileData;
  setName: (name: string) => void;
  toggleItem: (kitId: string, itemName: string) => void;
  isItemChecked: (kitId: string, itemName: string) => boolean;
  getKitCheckedItems: (kitId: string) => string[];
  startKit: (kitId: string) => void;
  isKitActive: (kitId: string) => boolean;
  isKitCompleted: (kitId: string) => boolean;
  getKitProgress: (kitId: string, totalItems: number) => number;
  resetKit: (kitId: string) => void;
  totalKitsStarted: number;
  totalItemsChecked: number;
}

const ProfileContext = createContext<ProfileContextValue | null>(null);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profile, setProfile] = useState<ProfileData>(loadProfile);

  useEffect(() => {
    saveProfile(profile);
  }, [profile]);

  const setName = useCallback((name: string) => {
    setProfile((prev) => ({ ...prev, name }));
  }, []);

  const toggleItem = useCallback((kitId: string, itemName: string) => {
    setProfile((prev) => {
      const kitItems = prev.checkedItems[kitId] || [];
      const exists = kitItems.includes(itemName);
      const newItems = exists
        ? kitItems.filter((n) => n !== itemName)
        : [...kitItems, itemName];

      // Auto-start kit if not already
      const activeKits = prev.activeKits.includes(kitId)
        ? prev.activeKits
        : [...prev.activeKits, kitId];

      const startedAt = prev.startedAt[kitId]
        ? prev.startedAt
        : { ...prev.startedAt, [kitId]: new Date().toISOString() };

      return {
        ...prev,
        checkedItems: { ...prev.checkedItems, [kitId]: newItems },
        activeKits,
        startedAt,
      };
    });
  }, []);

  const isItemChecked = useCallback(
    (kitId: string, itemName: string) =>
      (profile.checkedItems[kitId] || []).includes(itemName),
    [profile.checkedItems]
  );

  const getKitCheckedItems = useCallback(
    (kitId: string) => profile.checkedItems[kitId] || [],
    [profile.checkedItems]
  );

  const startKit = useCallback((kitId: string) => {
    setProfile((prev) => {
      if (prev.activeKits.includes(kitId)) return prev;
      return {
        ...prev,
        activeKits: [...prev.activeKits, kitId],
        startedAt: { ...prev.startedAt, [kitId]: new Date().toISOString() },
      };
    });
  }, []);

  const isKitActive = useCallback(
    (kitId: string) => profile.activeKits.includes(kitId),
    [profile.activeKits]
  );

  const isKitCompleted = useCallback(
    (kitId: string) => profile.completedKits.includes(kitId),
    [profile.completedKits]
  );

  const getKitProgress = useCallback(
    (kitId: string, totalItems: number) => {
      if (totalItems === 0) return 0;
      return Math.round(((profile.checkedItems[kitId] || []).length / totalItems) * 100);
    },
    [profile.checkedItems]
  );

  const resetKit = useCallback((kitId: string) => {
    setProfile((prev) => {
      const { [kitId]: _, ...restChecked } = prev.checkedItems;
      const { [kitId]: __, ...restStarted } = prev.startedAt;
      return {
        ...prev,
        checkedItems: restChecked,
        activeKits: prev.activeKits.filter((id) => id !== kitId),
        completedKits: prev.completedKits.filter((id) => id !== kitId),
        startedAt: restStarted,
      };
    });
  }, []);

  const totalKitsStarted = profile.activeKits.length;
  const totalItemsChecked = Object.values(profile.checkedItems).reduce(
    (sum, items) => sum + items.length,
    0
  );

  return (
    <ProfileContext.Provider
      value={{
        profile,
        setName,
        toggleItem,
        isItemChecked,
        getKitCheckedItems,
        startKit,
        isKitActive,
        isKitCompleted,
        getKitProgress,
        resetKit,
        totalKitsStarted,
        totalItemsChecked,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("useProfile must be used within ProfileProvider");
  return ctx;
}
