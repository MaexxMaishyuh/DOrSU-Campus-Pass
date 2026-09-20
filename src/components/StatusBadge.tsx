import { StyleSheet, Text, View } from 'react-native';
import type { StatusBadgeProps } from '../types/student';
import { colors } from '../styles/theme';

export function StatusBadge({ isActive }: StatusBadgeProps) {
  return (
    <View style={[styles.badge, isActive ? styles.active : styles.suspended]}>
      <View
        style={[
          styles.dot,
          { backgroundColor: isActive ? colors.green : colors.red },
        ]}
      />

      <Text
        accessibilityLiveRegion="polite"
        style={[
          styles.text,
          { color: isActive ? colors.green : colors.red },
        ]}
      >
        {isActive ? 'ACTIVE PASS' : 'SUSPENDED'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  badge: { flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', gap: 7, paddingHorizontal: 12, paddingVertical: 7, borderRadius: 20, borderWidth: 1},
  active: { backgroundColor: colors.greenLight, borderColor: colors.green},
  suspended: { backgroundColor: colors.redLight, borderColor: colors.red},
  dot: { width: 7, height: 7, borderRadius: 7},
  text: { fontWeight: '800', fontSize: 11, letterSpacing: 0.8,},
 }
);