# SheHacks_Team-053

## Elegance 

#### Members: Shweta Gurnani, Shweta Mohan, Shreya and Niti 

We aim to improve the overall condition women's health and hygenie across the globe through our portal where we provide quality at-home-health services for their betterment. Our AI based services provide you with results whose accuarcy is greater than that of pathologists. 

We also aim to fight the social stigma assosciated with these women-specific health issues so that talking about them openly becomes the new normal.


### Features

* ##### Cervical Cancer Prediction :
Predict if a person has Cervical cancer based on patient's demographic needs, Medical history and his habits

* ##### Predict PCOS :
Predict if a person is susceptible to having AI based on her lifestyle choices and medical history.

* Dedicated Dashboard for Patient and Doctor

* Tracking medical history of the patient along with previous suggested prescriptions which will be made available to the doctor treating the patient

* List Suggested of registered gynaecologists/oncologists nearby the patient after a person has been diagnosed with a particular disease or ailment.

* History of the medical operations and experience of the doctor readily available to the patient to establish trust in the website and to provide authenticity


### Technology Stack

* Machine Learning

	1.Python - 
	2.Django REST Framework (for Model Endpoints)

* Frontend

	1.ReactJS
	2.Material UI

* Backend

	1.NodeJS
	2.MongoDB (Database)

* Tools

	1.Amazon AWS
	2.Git
	3.Github


### Sample User Credentials

* For Doctor
	
	Username - doctor , 
	Password - doctor

* For Patient

	Username - patient , 
	Password - patient

### Instructions to Install and Setup

#### Download the Zip or clone the repository using command : 

git clone https://github.com/shwetagurnani/SheHacks_Team-053.git

#### Open One terminal and enter following commands

cd server

npm install

npm start

#### Open Second terminal  and enter following commands

cd client

npm install

npm start




### Machine Learning Tools

#### Cervical Cancer Detection Tool

Cervical cancer is a cancer arising from the cervix. It is due to the abnormal growth of cells that have the ability to invade or spread to other parts of the body. Early on, typically no symptoms are seen.  Later symptoms may include abnormal vaginal bleeding, pelvic pain or pain during sexual intercourse. While bleeding after sex may not be serious, it may also indicate the presence of cervical cancer.

Worldwide, cervical cancer is both the fourth-most common cause of cancer and the fourth-most common cause of death from cancer in women. In 2012, an estimated 528,000 cases of cervical cancer occurred, with 266,000 deaths. This is about 8% of the total cases and total deaths from cancer. About 70% of cervical cancers and 90% of deaths occur in developing countries.

The dataset for the Cervical cancer prediction is obtained from [UCI Machine Learning Repository](https://archive.ics.uci.edu/ml/datasets/Cervical+cancer+%28Risk+Factors%29).The dataset contains features about various parameters like age,years of smoking etc.and also uses the presence of other diseases like Sexually Transmitted diseases(STD),HIV etc.
The data set obtained has 32 features for classification and 4 classifications on the basis of prediction from each of the 4 tests,namely,Hinselmann,Schiller,Cytology,biopsy.

The data has been preprocessed by replacing the unknown values with the mean an the most important features for prediction was obtained by various plots.
Various machine learning models were like SVM,Logistic regression and Random Forest Classifier were tried out and Random forest classifier was found out to be the best model.The parameters for the model was found out by hyperparameter tuning.
For prediction,we used the aggregated results of all the 4 tests and even if one of the test predicts that the user suffers from cervical cancer,the model predicts cervical cancer.

The proposed model has been fitted by k-fold cross validation and the model has an accuracy of 94%.



#### PCOS

Polycystic ovary syndrome (PCOS) is a condition that affects a woman's hormone levels.1 out of every 5 women suffer from PCOS.The cause of polycystic ovary syndrome isn't well understood, but may involve a combination of genetic and environmental factors.Still there is lack of awareness among women about PCOS and it is not detected until they are taken to a doctor.
The dataset obtained uses various factors like age,irregular periods,frequency of exercising etc. to predict the risk of PCOS.The given dataset contains 22 features.The categorical values have been converted to binary values as a part of preprocessing and various machine learning techniques like Decision Tree,SVM,Naive Bayes,Random Forest,KNN have been tried and voting ensemble(which uses a combination of Machine learning algorithms- SVM,Decision Tree,Naive Bayse,logistic regression and KNN)was found out to be the best.
The model has an accuracy of 78%.

### Refernces and Citations

* Seminar Cervical cancer Author links open overlay panelSteven EWaggonerMDa
* Screening for Cervical Cancer David M. Eddy, MD, PhD
* Automation of Detection of Cervical Cancer Using Convolutional Neural Networks Vidya Kudva Keerthana Prasad
* The Epidemiology of Cervical Cancer Franco, Eduardo L. DrPHa; Schlecht, Nicolas F. PhDb; Saslow, Debbie PhDc
* Applications of Artificial Intelligence Techniques in Polycystic ovarian syndrome Diagnosis V. Deepika
* Study and detection of PCOS related diseases using CNN M Sumathi1, P Chitra1, R Sakthi Prabha1 and K Srilatha1
* Endocrine Disruptors and Polycystic Ovary Syndrome (PCOS): Elevated Serum Levels of Bisphenol A in Women with PCOS  Eleni Kandaraki, Antonis Chatzigeorgiou, Sarantis Livadas, Eleni Palioura, Frangiscos Economou, Michael Koutsilieris, Sotiria Palimeri, Dimitrios Panidis, Evanthia Diamanti-Kandarakis
* Access to Women's Health Care: A Qualitative Study of Barriers Perceived by Homeless Women
Lillian Gelberg MD and MSPH,C. H. Browner PhD and MPH,Elena Lejano MD &Lisa Arangua MPP
* A feminist model for women's health care Linda Andrist


### Screenshots

![she_hacks4](https://user-images.githubusercontent.com/46062965/111055560-f4195e80-849c-11eb-8ad4-f34672cd77b4.jpeg)

![she_hacks3](https://user-images.githubusercontent.com/46062965/111055558-f24f9b00-849c-11eb-9a2d-753062985cbc.jpeg)

![she_hacks2](https://user-images.githubusercontent.com/46062965/111055555-ef54aa80-849c-11eb-8107-abb9c6528a86.jpeg)

![she_hacks](https://user-images.githubusercontent.com/46062965/111055551-ec59ba00-849c-11eb-976f-942a7c5589ac.jpeg)






### Future Releases

* The person will upload an image of the report of tissues and our model will classify it as benign or malignant.

* The person can enter the start and end date of her periods and her flow as heavy/normal/low and the mood and then the person will get to know the probable date of her next periods

* Patient can request for booking an appointment with a doctor. She can also request a pharmacist for a particular drug not available in the market after prescription from a doctor

* Live Chat Functionality

* Multi-Lingual Support




### Team Members

* [Niti Kaur](https://github.com/NitiKaur)
* [Shreya Agarwal](https://github.com/shreyaag770)
* [Shweta Gurnani](https://github.com/shwetagurnani)
* [Swetha Mohan](https://github.com/swethamohan1)


