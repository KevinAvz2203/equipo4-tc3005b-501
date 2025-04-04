export default function Layout({
  children,
  team,
  analytics,
  admin,
  user,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  team: React.ReactNode;
  admin: React.ReactNode;
  user: React.ReactNode;
}) {
  const role: "admin" | "user" = "admin";

  return (
    <>
      {children}
      <br />
      {team}
      <br />
      {analytics}
      <br />
      {role === "admin" ? admin : user}
    </>
  );
}
