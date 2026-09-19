# Flexbox notes - Exercise 5

The screen uses a vertical stack with `gap: 16`. `SafeAreaView` keeps content inside device insets; `ScrollView` makes the peer card reachable on small screens. The main content uses `width: '100%'` and `maxWidth: 560`, rather than a fixed phone width.

The profile's `topRow` uses `flexDirection: 'row'`, `alignItems: 'center'`, and `gap: 14`. Its details use `flex: 1`, allowing long names and programs to wrap. The heading uses `justifyContent: 'space-between'` with wrapping. The action row uses `flexWrap: 'wrap'`, `flexGrow`, and `flexBasis`, allowing its buttons to stack on narrow screens. Buttons have at least 48 points of touch height.

React Native defaults to column direction; web flex containers default to row. With a row, justifyContent controls horizontal distribution and alignItems controls the vertical cross axis. With a column, those axes swap. Styles use camelCase keys and numeric, density-independent dimensions.
