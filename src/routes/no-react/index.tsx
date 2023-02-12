import { component$, useSignal } from '@builder.io/qwik';
import { MUIButton } from '~/integrations/react/mui';

export default component$(() => {
  const count = useSignal(0);
  return (
    <div>
      <h2>React component with no React code</h2>
      <MUIButton
        // we removed the hydration directive
        variant="contained"
        // and just added "host:" in front of our onClick$
        host:onClick$={() => {
          count.value++;
        }}
      >
        I'm a button from react
      </MUIButton>
      <p>current count is: {count.value}</p>
    </div>
  );
});
