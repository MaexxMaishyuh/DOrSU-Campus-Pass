import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import type { StudentProfile } from '../types/student';
import { StatusBadge } from './StatusBadge';
import { colors } from '../styles/theme';

interface StudentCardProps {
  student: StudentProfile;
  isActive: boolean;
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
        <StatusBadge isActive={isActive} />
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

      <Text style={styles.campus}>
        Campus: {student.campus}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderWidth: 2,
    borderColor: '#512DA8',
    borderRadius: 24,
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
    color: '#512DA8',
    fontSize: 10,
    fontWeight: '800',
    letterSpacing: 1.5,
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
    borderWidth: 2,
    borderColor: '#512DA8',
    backgroundColor: colors.white,
    overflow: 'hidden',
    flexShrink: 0,
  },

  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 45,
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
    color: '#512DA8',
    fontSize: 12,
    fontWeight: '700',
  },

  program: {
    color: '#180101',
    fontSize: 12,
    lineHeight: 18,
  },

  yearLevel: {
    color: '#000000',
    fontSize: 12,
  },

  divider: {
    height: 2,
    backgroundColor: '#512DA8',
  },

  campus: {
  color: '#000000',
  fontSize: 11,
  lineHeight: 16,
  textAlign: 'center',

  },
});