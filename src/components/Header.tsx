import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/theme';

export function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.brandRow}>
        <View style={styles.mark}><Text style={styles.markText}>D</Text></View>
        <View style={styles.brand}>
          <Text style={styles.university}>DAVAO ORIENTAL STATE UNIVERSITY</Text>
          <Text style={styles.faculty}>Faculty of Computing, Engineering, and Technology</Text>
        </View>
      </View>
      <Text style={styles.eyebrow}>YOUR CAMPUS. CONNECTED.</Text>
      <Text style={styles.title}>Digital Campus Pass</Text>
      <Text style={styles.subtitle}>DOrSU Campus Pass v1.0 · AY 2026–2027</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: colors.tealDark, padding: 24, borderRadius: 24, gap: 8 },
  brandRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 20 },
  mark: { width: 42, height: 42, backgroundColor: colors.white, borderRadius: 12, justifyContent: 'center', alignItems: 'center' },
  markText: { color: colors.tealDark, fontSize: 28, fontWeight: '900' },
  brand: { flex: 1 },
  university: { color: colors.white, fontSize: 11, fontWeight: '800', letterSpacing: 0.8 },
  faculty: { color: '#CDE8EE', fontSize: 10, lineHeight: 15, marginTop: 4 },
  eyebrow: { color: '#FFD49B', fontSize: 10, fontWeight: '800', letterSpacing: 1.8 },
  title: { color: colors.white, fontSize: 28, fontWeight: '800' },
  subtitle: { color: '#CDE8EE', fontSize: 12 },
});
