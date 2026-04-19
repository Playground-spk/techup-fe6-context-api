import DefaultHeader from "./defaultHeader";
import DefaultPage from "./defaultPage";

export default function DefaultLayout({
  theme,
  setTheme,
  contentRenderer,
  setUsername,
  username
}) {
  return (
    <>
      <DefaultHeader
        theme={theme}
        setTheme={setTheme}
        setUsername={setUsername}
        username={username}
      />
      <DefaultPage theme={theme}>{contentRenderer}</DefaultPage>
    </>
  );
}
