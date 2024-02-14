const CustomDrawer = (props) => { {
    return (
        <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: "#ccc" }}>
          <TouchableOpacity onPress={() => {}} style={{ paddingVertical: 15 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="share-social-outline" size={22} />
              <Text
                style={{
                  fontSize: 15,
  
                  marginLeft: 5,
                }}
              >
                Tell a Friend
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{ paddingVertical: 15 }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Ionicons name="exit-outline" size={22} />
              <Text
                style={{
                  fontSize: 15,
  
                  marginLeft: 5,
                }}
              >
                Sign Out
              </Text>
            </View>
          </TouchableOpacity>
        </View>
    );
  
  }}
  
  
  const DrawerRoutes_working = () => (
    <Drawer.Navigator initialRouteName="HomePage" >
        <Drawer.Screen
          name="HomePage"
          component={TabRouts}
          options={{
            headerShown:false,
            title: "My Homepage",
            drawerLabel: "Home Page",
            drawerActiveTintColor: "#333",
            drawerActiveBackgroundColor: "lightblue",
            drawerContentStyle: {
            backgroundColor: "#fff",
            },
            drawerIcon: ({focused}) => 
            focused? 
            (<Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />)
            :
            (<Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />)
           ,
          }}
        />
        <Drawer.Screen name="CareCircle" component={CareCircleStack} options={{
            headerShown:false,
            drawerIcon: ({focused}) => 
            focused? 
            (<Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />)
            :
            (<Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />)
           ,
        }}/>
        <Drawer.Screen name="CareAcademy" component={CareAcademyStack} options={{
            headerShown:false,
            drawerIcon: ({focused}) => 
            focused? 
            (<Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />)
            :
            (<Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />)
           ,
        }}/>
        <Drawer.Screen name="HealthCheck" component={HealthCheckStack} options={{
            headerShown:false,
            drawerIcon: ({focused}) => 
            focused? 
            (<Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />)
            :
            (<Ionicons name="chatbubble-ellipses-outline" size={24} color="black" />)
           ,
        }}/>
        
      </Drawer.Navigator>
  );