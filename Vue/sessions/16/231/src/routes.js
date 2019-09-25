import Home from './components/Home.vue'
import Header from './Header.vue'

const User = resolve => {
    //This is the way to have lazy load of components
    require.ensure(['./components/user/User.vue'], () => {
        //On the line above it's a kind of listener that says when this component [] be called then execute this callback
        resolve(require('./components/user/User.vue'));
        //this resolve will execute the inner command that will return the import
    },'user');
    //the 'user' is optional, it is to have buddle and load some templates together
} 
const UserStart = resolve => {
    require.ensure(['./components/user/UserStart.vue'], () => {
        resolve(require('./components/user/UserStart.vue'));
    },'user');
} 
const UserDetail = resolve => {
    require.ensure(['./components/user/UserDetail.vue'], () => {
        resolve(require('./components/user/UserDetail.vue'));
    },'user');
} 
const UserEdit = resolve => {
    require.ensure(['./components/user/UserEdit.vue'], () => {
        resolve(require('./components/user/UserEdit.vue'));
    },'user');
} 




export const routes = [
    //Here we have all our routes of the app
    // {path: '', component: Home, name: 'home'},
    {path: '/user', children:[
        // {path: '/user/:id', component: User}
        // this path let we have part of out url that its dynamic and can be retrive later on
        //(Notice that the /user will doesn't work any more cuz it now need the id info)
        {path: '', component: UserStart},
        {path: ':id', component: UserDetail, beforeEnter: (to, from, next)  => {
            console.log('inside route setup');
            next(); //for more options of the next see Global beforeEach 
        }},
        {path: ':id/edit', component: UserEdit, name: "userEdit"},
    ], components: {
        //this use of components allows you to switch your layout depending on which page you into.
        default: User,
        'header-bottom': Header
    }},
    {path: '', component: Home, name: 'home', components: {
        default: Home,
        'header-top': Header
    }},
    {path: '/redirect-me', redirect: 'user'},
    //'redirect' allows you to redirect the user
    {path: '*', redirect: '/'}
    //' path:'*' ' allows you to pass any unthread cases
]