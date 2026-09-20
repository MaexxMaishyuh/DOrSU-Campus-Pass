import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../styles/theme';

export function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.brandRow}>
        <View style={styles.brand}>
          <Text style={styles.university}>DAVAO ORIENTAL STATE UNIVERSITY</Text>
          <Text style={styles.faculty}>
            Faculty of Computing, Engineering, and Technology
          </Text>
        </View>
      </View>
      <Text style={styles.subtitle}>
        OFFICIAL STUDENT DIGITAL PASS v1.0 · AY 2026–2027
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { backgroundColor: '#512DA8', padding: 24, borderRadius: 24, gap: 8},
  brandRow: { flexDirection: 'row', alignItems: 'center', gap: 12, marginBottom: 20,},
  brand: { flex: 1, alignItems: 'center',},
  university: { color: colors.white, fontSize: 12, fontWeight: '800', letterSpacing: 0.8, textAlign: 'center'},
  faculty: {color: '#FFFF00',fontSize: 10, lineHeight: 15, marginTop: 4, textAlign: 'center'},
  subtitle: { color: '#b6b5b5', fontSize: 10, textAlign: 'center'},
 }
);