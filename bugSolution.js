```javascript
import React, { useState, useEffect } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const [abortController, setAbortController] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    setAbortController(controller);

    fetch('/api/data', { signal: controller.signal })
      .then(response => response.json())
      .then(data => setCount(data.count))
      .catch(error => {
        if (error.name !== 'AbortError') {
          console.error('Error fetching data:', error);
        }
      });

    return () => controller.abort();
  }, []);

  return <div>Count: {count}</div>;
}

export default MyComponent;
```