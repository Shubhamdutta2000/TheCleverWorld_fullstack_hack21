# Hungrily

[![License](https://img.shields.io/badge/License-Apache2-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0) [![Community](https://img.shields.io/badge/Join-Community-blue)](https://developer.ibm.com/callforcode/get-started/) [![Website](https://img.shields.io/badge/View-Website-blue)](https://hungrily.netlify.app/)

A basic GitHub repository  with documentation and code of Hungrily,a WiTACE 2021 Hackathon Solution using IBM Watson Assitant and GeoJson which create a common medium to connect the volunteers and users through a data-driven AI-based platform. This web application will enable the one in need to connect with their helper with just a single 'text'.

> If you're new to open source, please consider taking the [free "Introduction to Open Source" class](https://cognitiveclass.ai/courses/introduction-to-open-source).

## Contents

- [Submission or project name](#submission-or-project-name)
  - [Contents](#contents)
  - [Short description](#short-description)
    - [What's the problem?](#whats-the-problem)
    - [How can technology help?](#how-can-technology-help)
    - [The idea](#the-idea)
  - [Demo video](#demo-video)
  - [The architecture](#the-architecture)
  - [Long description](#long-description)
  - [Project roadmap](#project-roadmap)
  - [Live demo](#live-demo)
  - [Built with](#built-with)
  - [Contributing](#contributing)
  - [Versioning](#versioning)
  - [Authors](#authors)
  - [License](#license)
  - [Acknowledgments](#acknowledgments)

## Short description

### What's the problem?

A huge section of the world is going through hunger problems because of financial issues, mis-management and failure in locating people who are starving. In many cases we fail to connect the resources with needy ones. Thus this needs a solution in such dire situations.

### How can technology help?

In this pandemic situation, technology can help managing the resources and reaching out the needy ones in a smarter and time efficient manner, contributing to the larger welfare.

### The idea

It's the need of the hour to use the mastery of technologies and mend the gaps, striving towards the common goal of zero hunger all over. Thus, creating a common medium to connect the volunteers (food providers) and users (needy people) through a data driven AI based platform using the IBM tech support, a set of open source tools and Watson Services. This web application will enable the one in need to connect with their helper with the effort of just a single 'text'.

## Demo video

https://youtu.be/Ap90MscOtqU

## The architecture

![Hungrily Architecture](https://user-images.githubusercontent.com/85761117/122475686-a6a01680-cfe2-11eb-9560-ce38ae82cd72.jpg)

1. The user navigates to the site and interacts with the chatbot to laudge a food request to nearby volunteers.
2. The platform performs a GeoJson query to find a volunteer within a closed radius of 2kms from the point of request and assigns a food request to them.
3. The GeoJson feature is constructed and displayed in a mapbox as a heatmap layer for providing data driven decisions.
4. The data collected from both ends are further collected and stored in MongoDB for establishing connection.


## Long description

[DESCRIPTION.md](https://github.com/Sohi-dev/Hungrily_Hackathon/blob/main/docs/DESCRIPTION.md)

## Project roadmap

The project currently does the following things.

- It enables the user to request food and get assigned volunteer details via IBM watson assistant.
- It enables volunteers to see all the requests assigned to them.
- It features a world heatmap displaying areas with the most food requests.
- It features a geoJson query based algorithm to fetch the nearest volunteer with respect to an user.
- It further aims towards the implementation of DTN(Delay-tolerant networking) technology to connect the user and the volunteer through a virtual map, increasing the accuracy of   location detection. 

It's in a free tier IBM Cloud Kubernetes cluster. In the future we plan to run on Red Hat OpenShift, for example.

See below for our proposed schedule on next steps after WitAce 2021 submission.

![Roadmap (2)](https://user-images.githubusercontent.com/85761117/122476884-8709ed80-cfe4-11eb-85ca-7a91cdd9445b.png)

## Live demo

[Project website](https://hungrily.netlify.app/)

## Screenshot
![Screenshot 2021-06-21 000348](https://user-images.githubusercontent.com/58937669/122684660-4993a300-d224-11eb-9939-b9e7310bf1f3.png)

## Built with

- [IBM Cloudant](https://cloud.ibm.com/catalog?search=cloudant#search_results) - The NoSQL database used
- [IBM Cloud Functions](https://cloud.ibm.com/catalog?search=cloud%20functions#search_results)
- The compute platform for handing logic
- [IBM API Connect](https://cloud.ibm.com/catalog?search=api%20connect#search_results) 

## The web framework used
- React and Node JS
- Watson Services
- MongoDB Express

## Contributing

Please read [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [Github](http://github.com/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors
 1. [Sohini Chakraborty](https://github.com/Sohi-dev)
 2. [Prasun Das](https://github.com/Prasundas99)
 3. [Soumava Banerjee](https://github.com/SoumavaBanerjee)
 3. [Shubham Dutta](https://github.com/Shubhamdutta2000)

## License

This project is licensed under the Apache 2 License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Based on real time applications.
