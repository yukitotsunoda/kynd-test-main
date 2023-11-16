export function getInitials(firstName: string, lastName: string): string {
  return (
    firstName?.slice(0, 1).toLocaleUpperCase() +
    lastName?.slice(0, 1).toLocaleUpperCase()
  );
}
