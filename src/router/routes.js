export default [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/views/Home')
    },
    {
    	path: '/favorites',
    	name: 'Favorites',
    	component: () => import('@/views/Favorites')
    },
    {
        path: '*',
        name: 'NotFound',
        component: () => import('@/views/NotFound')
    }
]