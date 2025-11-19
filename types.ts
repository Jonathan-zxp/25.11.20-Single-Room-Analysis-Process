export enum UserGroupType {
  DEMENTIA = 'DEMENTIA',
  FALL_RISK = 'FALL_RISK',
  SENSORY = 'SENSORY',
  ALL = 'ALL'
}

export interface RequirementItem {
  text: string;
  type?: UserGroupType; // If specific to a group in the shared section
}

export interface UserGroupData {
  id: UserGroupType;
  title: string;
  subtitle: string;
  colorTheme: {
    bg: string;
    border: string;
    text: string;
    heading: string;
    light: string;
  };
  requirements: string[];
}

export interface DesignFactorData {
  shared: string[];
  adaptive: string[];
}

export interface RoomModeData {
  id: string;
  modeName: string;
  description: string;
  features: string[];
  targetGroup: UserGroupType;
}