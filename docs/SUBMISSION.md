# Finish and submit

## Required deliverables

1. PDF: `ITMSD1_Lab03_[LastName]_[FirstName].pdf`. Fill in your identity, section, instructor, date, public repository URL and demo URL. Review the explanation draft and write reflections from your own experience.
2. Public GitHub repository. This local project has six exercise commits. Publish only this project folder, not its parent folders. `node_modules/`, `.expo/`, and `dist/` are ignored. Add your own meaningful commits as you personalize and verify the project. Verify public visibility in a signed-out browser.
3. A 30-60 second phone recording or live mobile demonstration.

## Six-module evidence checklist

- Module 1: terminal with Metro running and QR code, plus phone after changing the Header text. Confirm Fast Refresh preserves a nonzero count when saving a text-only edit. Restore the label afterward.
- Module 2: running app showing native View/Text/Image/Pressable output; explain those primitives in code.
- Module 3: main and peer profiles showing reuse with different props, alongside typed interfaces.
- Module 4: counter at 0 and after at least three taps, reset back to 0, then suspended/red and active/green status.
- Module 5: phone layout with readable wrapped text; demonstrate the row/column and spacing properties.
- Module 6: full integrated app and peer demo on a phone/emulator.

Supplied captures are real browser previews. Add native screenshots and terminal evidence before claiming all six modules are verified. Run the guide's built-in validator by pasting App.tsx, StudentCard.tsx and ScanCounter.tsx into their corresponding tabs; target 90%+.

## 45-second recording script

- 0-8s: show the active student pass; identify the app and sample or personal profile.
- 8-18s: tap +1 Scan at Gate three times, showing 1, 2, 3.
- 18-24s: tap Reset Scans; point out 0.
- 24-32s: suspend the pass (red SUSPENDED), then reactivate (green ACTIVE).
- 32-42s: show the peer demo and scroll to the second profile; explain same component, different props.
- 42-50s: mention parent useState, typed props, and Flexbox layout.

## Publish when ready

Create an empty PUBLIC repository in your GitHub account. From this folder (replace the URL):

```sh
git remote add origin https://github.com/YOUR_USERNAME/dorsu-campus-pass.git
git push -u origin HEAD
```

Do not run against a parent directory. Upload the final PDF and video/link through the assigned LMS portal before the actual deadline. No deadline was provided in the conversation.
