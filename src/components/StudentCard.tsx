import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import type { StudentProfile } from '../types/student';
import { StatusBadge } from './StatusBadge';
import { colors } from '../styles/theme';

interface StudentCardProps {
  readonly student: StudentProfile;
  readonly isActive: boolean;
}

export function StudentCard({
  student,
  isActive,
}: StudentCardProps) {
  const [failedUrl, setFailedUrl] = useState<string | null>(null);

  const useRemote =
    student.avatarUrl.length > 0 &&
    failedUrl !== student.avatarUrl;

  const imageSource =
    student.avatarSource ??
    (useRemote
      ? { uri: student.avatarUrl }
      : require('../../assets/avatar.png'));

  return (
    <View style={styles.card}>
      <View style={styles.heading}>
        <Text style={styles.label}>STUDENT PROFILE</Text>
        <Text style={styles.sample}>LAB DEMO</Text>
      </View>

      <View style={styles.topRow}>
        <View style={styles.avatarFrame}>
          <Image
            accessibilityLabel={`Avatar for ${student.name}`}
            source={imageSource}
            onError={() => setFailedUrl(student.avatarUrl)}
            resizeMode="cover"
            style={styles.avatar}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.name}>{student.name}</Text>

          <Text style={styles.idNumber}>
            ID: {student.idNumber}
          </Text>

          <Text style={styles.program}>
            {student.program}
          </Text>

          <Text style={styles.yearLevel}>
            {student.yearLevel}
          </Text>
        </View>
      </View>

      <View style={styles.divider} />

      <StatusBadge isActive={isActive} />

      <Text style={styles.campus}>
        Campus: {student.campus}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
    borderRadius: 22,
    padding: 20,
    gap: 15,
  },

  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 8,
  },

  label: {
    color: colors.muted,
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
  },

  sample: {
    color: colors.teal,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 1,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
  },

  avatarFrame: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 3,
    borderColor: colors.teal,
    backgroundColor: colors.white,
    overflow: 'hidden',
    flexShrink: 0,
  },

  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 41,
  },

  details: {
    flex: 1,
    gap: 5,
  },

  name: {
    color: colors.ink,
    fontSize: 19,
    fontWeight: '800',
  },

  idNumber: {
    color: colors.teal,
    fontSize: 12,
    fontWeight: '700',
  },

  program: {
    color: colors.muted,
    fontSize: 12,
    lineHeight: 18,
  },

  yearLevel: {
    color: colors.muted,
    fontSize: 12,
  },

  divider: {
    height: 1,
    backgroundColor: colors.line,
  },

  campus: {
    color: colors.muted,
    fontSize: 11,
    lineHeight: 17,
  },
});