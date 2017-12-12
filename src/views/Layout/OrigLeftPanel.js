return (
    		<Router>
    			<div style={{ display: 'flex' }}>
		      <Menu style={MenuStyle} pointing secondary vertical>
		        
		        <Menu.Item name='home' 
		        		   active={activeItem === 'home'} 
		        		   onClick={this.handleItemClick} 
		        		   to='/shoes'/>
		        <Menu.Item name='posted trots' 
		        		   active={activeItem === 'posted trots'} 
		        		   onClick={this.handleItemClick}
		        		   to='bubblegum'/>
		        <Menu.Item name='saved trots' 
		        		   active={activeItem === 'saved trots'} 
		        		   onClick={this.handleItemClick} 
		        		   to='shoelaces'/>
		      </Menu>
		     
		       {routes.map((route, index) => (
		          <Route
		            key={index}
		            path={route.path}
		            exact={route.exact}
		            component={route.sidebar}
		          />
		        ))}
		       

		       <div style={{ flex: 1, padding: '10px' }}>
		        {routes.map((route, index) => (
		          // Render more <Route>s with the same paths as
		          // above, but different components this time.
		          <Route
		            key={index}
		            path={route.path}
		            exact={route.exact}
		            component={route.main}
		          />
        		))}
      			</div>
      		</div>
		    </Router>