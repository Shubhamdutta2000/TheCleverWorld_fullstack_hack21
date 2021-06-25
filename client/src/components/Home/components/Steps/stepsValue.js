export function getSteps() {
    return [
      "Register",
      "Give Location Preference",
      "Wait untill you get notification",
      "Track mobile Vaccination Van in Map",
      "Get Vaccinated",
    ];
  }
  
  export function getStepContent(step) {
    switch (step) {
      case 0:
        return `Register with your details to our application`;
      case 1:
        return `Give your prefered center on where you want to get vaccinated`;
      case 2:
        return `The government will set the dates and center so waituntill you get the notification for the vaccination`;
  
      case 3:
        return `For transpirancy we have set tracking device with mobile Vaccination Van which can track via Map so the user can have a haste free response for vaccination`;
  
      case 4:
        return `The most important part of our mission #VaccinationForAll`;
  
      default:
        return "Unknown step";
    }
  }
  