import React from 'react';
import {IndexRoute, Route} from 'react-router';

import App from './layouts/app';
import Intro from './layouts/intro';
import Body from './layouts/body';
import TwoCols from './layouts/twoCols';
import ThreeCols from './layouts/threeCols';

import Home from './containers/home';
import middleSchool from './containers/education/middleSchool';
import AboutUs from './containers/about/about_us';
import Contacts from './containers/about/contacts';
import Represent from './containers/about/represent';
import Partners from './containers/about/partners';
import SlideItemsContainer from './containers/SlideItemsContainer';
import InsideProgram from './containers/education/InsideProgram';
import Catalog from './containers/Catalog'
import InsideLiving from './containers/InsideLiving'
import InsideUni from './containers/education/InsideUni'
import InsideBlog from './containers/InsideBlog'

import PersonalArea from './containers/user/PersonalArea'
import Payment from './containers/user/Payment'
import Quest from './containers/user/Quest'

import TableContainer from './containers/TableContainer'
import AddContainer from './containers/AddContainer'

export default (
	 <Route path='/' component={App}>

	  	<Route component={Intro}>
	    	<IndexRoute component={Home} />
	    </Route>

	    <Route component={Body}>
		    <Route component={TwoCols}>
		    	<Route path="education/middle-school" component={middleSchool} />
		    	<Route path="/catalog/:type/:city" component={Catalog} />
		    	<Route path="/catalog/:type" component={Catalog} />
		    	<Route path="about/contacts" component={Contacts} />

		    	<Route path="user_:user" component={PersonalArea} />

		    	<Route path="admin_:admin/table/:table" component={TableContainer} />
		    </Route>
		    <Route component={ThreeCols}>
	    		<Route path="education/more" component={SlideItemsContainer} />
	    		<Route path="education/:program" component={InsideProgram} />
	    		<Route path="education/university/:uni" component={InsideUni} />
	    		<Route path="about/company" component={AboutUs} />
	    		<Route path="about/represent" component={Represent} />
	    		<Route path="about/partners" component={Partners} />
	    		<Route path="more-info/:page" component={SlideItemsContainer} />
	    		<Route path="living/:accomodation" component={InsideLiving} />
	    		<Route path="media/blog/:item" component={InsideBlog} />

	    		<Route path="user_:user/payment" component={Payment} />
	    		<Route path="user_:user/quest/:quest" component={Quest} />

	    		<Route path="admin_:admin/add/:add" component={AddContainer} />
	    	</Route>
	    </Route>
	  
	  </Route>
)