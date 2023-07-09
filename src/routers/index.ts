import { createRouter, createWebHashHistory } from 'vue-router';
import { constanRoute } from './routes';
const router = createRouter({
    history: createWebHashHistory(),
    routes: constanRoute,
    // 滚动行为
    scrollBehavior() {
        return {
            left: 0,
            top: 0
        };
    };
});

export default router;
