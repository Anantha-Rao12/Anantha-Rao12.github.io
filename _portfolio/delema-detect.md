---
title: "DeLeMa-Detect"
excerpt: "Deep Learning for Malaria Detection<br/>"
collection: portfolio
date: 2020-12-24
---

DeleMa Detect is a Web Application built on a lightweight Python backend that is able to **classify *Plasmodium falciparum* infected blood smear images**. The classification has be documented to be about **~96% accurate** with a **0.96 F1 score**. Results for a blood smear image can be obtained within seconds whereas a traditional approach of testing in laboratory with the requirement of technicians and well-trained pathologists would require more than a day for accurate results. To classify each image, a Deep Learning convolutional neural network based Mobilenet_v2 architecture was trained on a set of 27,558 images using open-source software Python, Tensorflow2 and Keras API.

The final Web App has been deployed on [Heroku](https://delema-detect-igem-iiserpune.herokuapp.com/) for testing and viewing. [This](https://github.com/igemsoftware2020/IISER-Pune-India/tree/master/DeleMa_Detect) Github repository contains all the files used to build, test and deploy the model. You can find more information on how the software was built on our iGEM [Software page](https://2020.igem.org/Team:IISER-Pune-India/Software).
