import DefaultHeader from "./defaultHeader";
import DefaultPage from "./defaultPage";

export default function DefaultLayout({
  contentRenderer,
  setUsername,
  username
}) {
  return (
    <>
      <DefaultHeader
        setUsername={setUsername}
        username={username}
      />
      <DefaultPage>{contentRenderer}</DefaultPage>
    </>
  );
}
