## 💻 Introduction

Our app is designed to manage the water intake of cats kept at home. The app connects to a smart water dispenser device equipped with AI that distinguishes each cat. Through the built-in camera of the dispenser, it updates the daily water intake of each cat in real-time. Users can view today's water intake, evaluations, and previous water intake statistics in the app. Additionally, it offers a co-management feature, allowing family members to collectively oversee the cats.

When creating a management space in the app, upon registering cat information, we collect five pictures of the cat to be used by an AI model. These images are processed through an AI model for breed recognition and extraction of characteristic colors. The resulting data is stored in the database. Using the camera integrated into the water dispenser, the real-time AI analysis of the cat currently drinking water is compared with the breed and color values stored in the database to recognize the individual cat. Subsequently, the water intake amount is updated in the database. However, as the actual connection to the water dispenser is not available, the verification of water intake updates cannot be performed.

![image](https://github.com/matchlessNostril/catFeeder/assets/81696717/1cae15de-b911-4d18-bd37-1af89ad017de)

## 📹 Demonstration Video
<a href="https://youtu.be/w5-AoBGKgJU?si=pbF0UQpNJNiQSJvY"> <img width="800" alt="thumbnail" src="https://github.com/matchlessNostril/catFeeder/assets/144131324/774b75fc-e567-4128-bcbb-a3ca1e102379"> </a>

While the demo video is in Korean, English-version screenshots are available in the 'Application Features' section below.


## 🙇 Team members (Hanyang Univ)

|Name|Part|Dept|Contact|
|---|---|---|---|
|ChanSol Choi|Frontend|Information Systems|hjk9216@hanyang.ac.kr|
|YunSun Lee|Backend|Film and Theatre|justina7182@gmail.com|
|Jukyung Ahn|Backend|Information Systems|hyoju8618@naver.com|
|JunGgi Hong|AI|Information Systems|sentorino@hanyang.ac.kr|


## 🕐 Development Period
- `23.10-23.11`


## 📚 Tech Stack
<div>
	<b>FrontEnd </b>
	<img src="https://img.shields.io/badge/React Native-61DAFB?style=flat&logo=React&logoColor=white" />
	<img src="https://img.shields.io/badge/StyleSheet-DB7093?style=flat&logo=styled-components&logoColor=white" />
	<img src="https://img.shields.io/badge/Expo-000020?style=flat&logo=Expo&logoColor=white" />
</div>
<div>
	<b>BackEnd </b>
	<img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=Node.js&logoColor=white" />
	<img src="https://img.shields.io/badge/MySQL-4479A1?style=flat&logo=MySQL&logoColor=white" />
  	<img src="https://img.shields.io/badge/AWS Lambda-FF9900?style=flat&logo=awslambda&logoColor=white" />
	<img src="https://img.shields.io/badge/AWS RDS-569A31?style=flat&logo=amazonrds&logoColor=white" />
	<img src="https://img.shields.io/badge/AWS S3-527FFF?style=flat&logo=amazons3&logoColor=white" />
</div>
<div>
	<b>AI </b>
	<img src="https://img.shields.io/badge/OpenCV-5C3EE8?style=flat&logo=OpenCV&logoColor=white" />
	<img src="https://img.shields.io/badge/Flask-000000?style=flat&logo=Flask&logoColor=white" />
  	<img src="https://img.shields.io/badge/PyTorch-EE4C2C?style=flat&logo=PyTorch&logoColor=white" />
	<img src="https://img.shields.io/badge/scikit learn-F7931E?style=flat&logo=scikitlearn&logoColor=white" />
</div>

## 📑 Document & AI Blog
- [Document](https://github.com/matchlessNostril/MulMeokNyang/blob/main/Documentation/NyangPort_Documentation.pdf)

- [Backend API Docs](https://www.notion.so/sorukun/MulMeokNyang-API-fef2fa29b47e4c978d3d57f32a4b105)

- [AI Blog](https://bit.ly/3tfp9yn)


## ✔️ Available Device
- `Mobile (iOS/Android)`

## 📌 Application Features
Originally developed in Korean, the app's screenshots have been translated into English to match the README.


### 1️⃣ Start

<img src="https://github.com/user-attachments/assets/a7a432af-5fcb-42c4-a24a-a17485c2d191" alt="1_Start (1)" width="200"/>

- Click the "Sign up" button to proceed with the registration via email.


### 2️⃣ Sign-Up

<img src="https://github.com/user-attachments/assets/d93ee306-3705-4c02-99a4-175806e5a0f4" alt="2_SignUp" width="600"/>

- Enter information in the email, password, and password confirmation fields.
- If the email and password are valid, proceed to the next screen.
- Verify your identity through message authentication.
- Enter the 6-digit authentication code and press the complete button to finish SignUp.


### 3️⃣ Sign-In / Find Email / Find Password

<img src="https://github.com/user-attachments/assets/4d903607-97db-4e5a-8024-fd493ae2ecf1" alt="3_Login" width="200"/>

- Sign in with the email and password.
- The automatic sign-in setting is only available for users who have completed user profile registration.
Users who have not yet registered their profile will receive an alert modal to set up automatic login after registration.


<img src="https://github.com/user-attachments/assets/4b9bc241-e8e0-49b6-b7c5-6405f41ed6d7" alt="4_FindEmail" width="400"/>

- If you have forgotten your email, please click on the "Find Email" button.
By entering only your name and phone number, you can find your email.


<img src="https://github.com/user-attachments/assets/7a2189d9-8aab-4cfd-953b-40792d131f1a" alt="5_FindPw" width="400"/>

- If you have forgotten your password, click on the "Find Password" button to proceed with SMS verification. After that, your password will be sent to the corresponding email.


### 4️⃣ User Profile Registration

<img src="https://github.com/user-attachments/assets/616afe76-c67c-4762-9634-7194a36ce1e0" alt="6_UserProfile" width="200"/>

- Enter a profile picture (optional), nickname, and self-introduction (optional).


### 5️⃣ Go To Management Space

<img src="https://github.com/user-attachments/assets/b55b177c-8409-4628-a63c-bbf01f894521" alt="7_CreateSpace" width="600"/>

- If you want to create a new space to manage your pet cats,
Press the 'Create My management Space' button,
Proceed with the Cat Fountain registration to work with the management space.
- If you want to be a co-manager in an existing space, click 'Join as Co-Manager'.
- Once co-manager registration is confirmed, it'll be navigated to the main screen immediately.


### 6️⃣ Cat Profile Registration

<img src="https://github.com/user-attachments/assets/8ed8090b-125c-4a8f-9655-9a228ca0823b" alt="8_CatProfile" width="200"/>

- Enter the profile picture of the cat, name, age, and weight.

<img src="https://github.com/user-attachments/assets/611369f9-4f35-41dd-86ff-8f8a9c026c17" alt="9_AI" width="400"/>

- In order for the cat fountain to recognize the cat and record the daily water intake, users should conduct an AI analysis with five photos to classify the breed and extract the characteristic colors.
- The characteristic color will appear slightly darker considering the shadow according to the position of the water dispenser camera.

<img src="https://github.com/user-attachments/assets/79b3a7c1-c8b5-46bd-af5c-1dc222f5c78b" alt="10_CatFeed" width="200"/>

- Enter the wet food consumption information.
- It will be used as a calculation for the amount of recommended water intake.

<img src="https://github.com/user-attachments/assets/a74abed8-88d9-453e-9bac-09d9e16cc5d3" alt="11_Catwater intake" width="200"/>

- Set the daily water intake goal.
- If you want to register a new cat, click 'Add another' button. Or If you want to go straight to the management space, click the 'Complete' button.


### 7️⃣ Main
<img src="https://github.com/user-attachments/assets/278d8373-e01b-457b-8f08-c7ac7bb1664c" alt="12_Main" width="400"/>

- Select a cat profile at the top to see the main information.
- You can see the daily goal water intake guage, with an evaluation message corresponding to the value.
- If you press the Statistics button, it'll be navigated to the period-based water intake statistics screen for the currently selected cat.


### 8️⃣ water intake Statistics
<img src="https://github.com/user-attachments/assets/f0c80cb5-5ab8-4e4e-9930-0f3e165e876e" alt="13_Statistics" width="600"/>

- You can check the weekly, monthly, and yearly statistical graphs,
You can specify a specific period by clicking the calendar icon.
- Press the bar on the graph to see the exact figures.
- Select a cat profile at the top, You can see another cat's water intake statistic.


### 9️⃣ Drawer
<img src="https://github.com/user-attachments/assets/ab537d4e-ed63-483c-b2ef-e9d8d5855a72" alt="14_Drawer" width="200"/>

- If you press the menu icon on the top right, the drawer will bring up from the right side.
The features of the drawer are following below.
- Edit user profile
- Add, Edit, or Delete cat profile
(To Edit or Delete, the cat selection modal will appear)
- Co-manager
- Sign Out

### 🔟 Co-manager
<img src="https://github.com/user-attachments/assets/7d2c8e92-90cd-4dbf-b27f-e25b851fc52e" alt="15_CoManager" width="400"/>

- You can see a list of other users who have been added as co-manager of the current space.
- If you are the space owner, you can click the add co-manager button to add a new manager,
or you can also delete an existing co-manager by clicking delete icon.
