# React useEffect Cleanup Function Missing

This repository demonstrates a common error in React: forgetting to include a cleanup function in the `useEffect` hook.  Failing to do this can result in memory leaks and unexpected behavior when the component unmounts.

## Bug

The `bug.js` file contains a component that fetches data using `fetch`. However, it lacks a cleanup function within the `useEffect` hook to handle the potential cancellation of the fetch request upon component unmount. This can lead to issues if the fetch is still in progress when the component is unmounted.

## Solution

The `bugSolution.js` file provides the corrected code with a cleanup function in `useEffect`. This cleanup function ensures that any in-flight fetch requests are aborted when the component unmounts, preventing potential memory leaks.