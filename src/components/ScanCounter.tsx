import { Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/theme';

interface ScanCounterProps {
  count: number;
  onScan: () => void;
  onReset: () => void;
}

export function ScanCounter({ count, onScan, onReset }: ScanCounterProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Campus Gate Verification Log</Text>

      <View style={styles.counterDisplay}>
        <View style={styles.caption}>
          <Text style={styles.label}>Today's Gate Entries</Text>
          <Text style={styles.hint}>Current demo session</Text>
        </View>

        <Text
          testID="scan-count"
          accessibilityLiveRegion="polite"
          style={styles.value}
        >
          {count}
        </Text>
      </View>

      <View style={styles.btnRow}>
        <Pressable
          accessibilityRole="button"
          onPress={onScan}
          style={({ pressed }) => [
            styles.btnPrimary,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.btnText}>+1 Scan at Gate</Text>
        </Pressable>

        <Pressable
          accessibilityRole="button"
          onPress={onReset}
          style={({ pressed }) => [
            styles.btnSecondary,
            pressed && styles.pressed,
          ]}
        >
          <Text style={styles.btnSecText}>Reset Scans</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.white, padding: 20, borderRadius: 22, borderWidth: 2, borderColor: '#512DA8', gap: 18},
  title: { color: colors.ink, fontSize: 20, fontWeight: '800'},
  counterDisplay: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 16, backgroundColor: '#F5F0FF', borderRadius: 12,  padding: 14},
  caption: { flex: 1, gap: 5},
  label: { color: '#000000', fontSize: 13},
  hint: { color: '#b6b5b5', fontSize: 10},
  value: { color: '#512DA8', fontSize: 44, fontWeight: '800', flexShrink: 1},
  btnRow: { flexDirection: 'row', justifyContent: 'space-between', width: '100%'},
  btnPrimary: { width: '48%', backgroundColor: '#512DA8', borderRadius: 12, padding: 14, minHeight: 48,alignItems: 'center', justifyContent: 'center'},
  btnSecondary: { width: '48%', backgroundColor:'#F5F0FF',borderWidth: 2, borderColor: '#512DA8', borderRadius: 12, padding: 14, minHeight: 48, alignItems: 'center', justifyContent: 'center'},
  btnText: { color: '#FFFF00', fontSize: 12,fontWeight: '700'},
  btnSecText: { color: colors.ink, fontSize: 12, fontWeight: '700'},
  pressed: { opacity: 0.7},
});