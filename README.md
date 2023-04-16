# Subnet

This project was created to give user a environment where they can learn about subnet, ip address, routing table and other related things

![image](https://user-images.githubusercontent.com/114513938/232289012-d7708ab8-61ca-41a5-a6ef-628f89cf464b.png)

## About Project Directory

In the project directory, we have:

### `public Folder`

Contains index.html which is created by react only while intiating the react-app.

### `src Folder`

Contians all the components that are used in site. Here the main code resides along with css files.\
First index.js is rendered which calls App.js which is the main component of are website. It further contains different component which are mentioned below:

1) Navbar: It contains title of the website at center and a watch showing time at top right. The clock contains present day, date, and time.

![image](https://user-images.githubusercontent.com/114513938/232290168-4246515b-008a-4368-a3d5-d6556b9f2ae8.png)

2) Status section: It will show the current activity which user is performing and update accordingly. If user is at original page it would be empty. For eg., initially was empty and when user click assign button present in footer it will change to Assigning ip address.

![image](https://user-images.githubusercontent.com/114513938/232289707-470f5bbd-8057-4eda-bc34-74ba3f6eecfe.png)

3) Network Section:  It contains picture of network present. Intially each device present in the network have white color, when ip address is assigned to them it will change color to green. So according to the network router 2 is main router here as it is connected to both the router. Thus user will fill all the data of router 2 themselves.

![image](https://user-images.githubusercontent.com/114513938/232289860-79092c06-1a6e-453a-8e22-35372e6c4a7f.png)

4) Log Section: It maintains the record of all activities which are performed by the user. It also maintains the time at which each activity was performed. Most recent activity will be shown at top. Intially when nothing is done by user it will be empty.

![image](https://user-images.githubusercontent.com/114513938/232290105-49c85be0-99c4-45be-a593-5b435b199d39.png)

5) Footer Section: It contains the available option or activity which user can perform to get te idea of subnets. It contains 3 options Assign, Populate, Lookup.

![image](https://user-images.githubusercontent.com/114513938/232290418-780bb0c4-a273-409e-b7f6-095b24c66699.png)

  i) Assign: It is the first option which user have to perform. Without completing this user cannot move to other 2 options. It contains two sections. Both contains a close button which can be used if user have to go to original page directly.\
In first user have to fill a class C network id along with mask bits. There is default value present in the input box of both network id and mask bits. Also a specific range is provided for both. Class C network have the first part of id in range 192-223 and it should have a minimum mask bits of 24. Thus if user enters a invalid value it will prompt an error. If both the valus are valid then user will move to next section and the color of router 1, router 3 and host connected to them will change indicating they are assigned the value.
![image](https://user-images.githubusercontent.com/114513938/232290866-455e06a9-7c61-4621-a73c-8683aeb33bd3.png)

In second user have to fill ip address of Router 2 and hosts connected to router 2. User will be provided with the ip address of router 1 and router 3 along with network id and mask bits. According to this data user have to fill the ip addresses asked. If user enters invalid value then it will prompt an alert. If the input is valid user a success message is shown and assign part will be completed
![image](https://user-images.githubusercontent.com/114513938/232290989-2fe4ec92-e379-40d8-bd40-deebecf53cc2.png)

  ii) Populate: This is where user have to populate routing table of router 2, which contains entries of hosts and routers connected to router 2. User have to fill ip address of each devce along with their mask bits. There is also a column of port number which is different for each device. it is read only type i.e., user cannot change it. Port number for each deviec represent at which port router 2 will send the recieved packet. When user click populate, the status section will show all the available data which can be used by user to fill the routing table. If the routing table is filled inccorrectly it will prompt an error otherwise a succes message will shown.

![image](https://user-images.githubusercontent.com/114513938/232291157-5f98baae-5bff-4db4-b961-0b9733a45a6a.png)

  iii) LookUp: This where user have to search for destination of recieved packet. It contains the routing table filled by the user to help user find the correct port number where the packet shoould be sent. It have a button 'Recieve Packet' when user click this button a random packet will be generated and destination where it is to be sent will be shown. Now user have to lookup the routing table provided and then in input box they have to enter the correct port number. If the provided port number is corect then a success message will appear otherwise user have to try again.

![image](https://user-images.githubusercontent.com/114513938/232291370-d41bbca4-c37f-46ed-a6cf-601c1efcf4bd.png)
