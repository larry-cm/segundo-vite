// import { Redirect, useLocation } from 'wouter'
// // Definir las rutas válidas
// const validRoutes = [
//   '/',
//   '/gif/:keyword/:rating?/:mode?/:lang?',
//   '/gif-detalle/:id?',
//   '/gif-detalle/:mode?/:id?',
//   '/404'
// ]

// // Componente para redireccionar si la ruta no es válida

// export default function NotFoundRedirect () {
//   const [location] = useLocation()
//   // Verifica si la ruta actual coincide con alguna ruta válida
//   const isValid = validRoutes.some(route => {
//     // Convertir la ruta de wouter a una expresión regular simple
//     const regex = new RegExp('^' + route
//       .replace(/:[^/]+(\?|\b)/g, '[^/]+') // reemplaza :param y :param? por [^/]+
//       .replace(/\?/g, '') + // elimina los signos de ?
//       '$')
//     return regex.test(location)
//   })
//   // Si no es válida, redirige a /404
//   if (!isValid) return <Redirect to='/404' />
//   return null
// }
