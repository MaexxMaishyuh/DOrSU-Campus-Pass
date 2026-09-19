# Verification record

Executed 18 September 2026 in the local workspace.

- TypeScript: PASS (`npm run typecheck`).
- Android/iOS/web exports: PASS (`npx expo export --platform all`). Export is not a native runtime test.
- Browser: PASS - Initial count 0
- Browser: PASS - Three scans produce 1, 2, 3
- Browser: PASS - Reset to 0
- Browser: PASS - Suspend/red badge
- Browser: PASS - Independent active peer
- Browser: PASS - Reactivate main pass
- Browser: PASS - Hide peer
- Browser: PASS - 320px viewport without horizontal overflow
- Browser: PASS - 20 consecutive scans
- Browser: PASS - Reload resets session
- Browser: PASS - No browser runtime errors
- Fast Refresh: Pass: text changed while count stayed at 1
- Guide built-in validator: App.tsx, StudentCard.tsx, ScanCounter.tsx each 100/100. This heuristic score is not an instructor grade.
- Native phone/emulator and mobile recording: pending.
- Public GitHub publication: pending.

The real screenshots in evidence/ were captured through React Native Web. They do not show a phone or emulator.

Dependency audit found 10 moderate transitive findings (no high/critical); npm suggested a breaking downgrade to Expo 46 for the chain. SDK 57 compatibility was retained.
