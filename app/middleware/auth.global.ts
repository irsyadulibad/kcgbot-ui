export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn } = useUserSession();
  const authPaths = ["/login"];

  if (!loggedIn.value && !authPaths.includes(to.path))
    return navigateTo("/login");

  if (loggedIn.value && authPaths.includes(to.path))
    return navigateTo("/dashboard");
});
