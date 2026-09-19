import type { ImageSourcePropType } from 'react-native';

export interface StudentProfile {
  readonly name: string;
  readonly idNumber: string;
  readonly program: string;
  readonly yearLevel: string;
  readonly avatarUrl: string;
  readonly avatarSource?: ImageSourcePropType;
  readonly campus: string;
}

export interface StatusBadgeProps {
  readonly isActive: boolean;
}