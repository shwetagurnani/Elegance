import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/Home";
import DoctorLogin from "./pages/DoctorLogin";
import NewPrescriptionDoctor from "./pages/NewPrescriptionDoctor";
import NewPrescriptionPatient from "./pages/NewPrescriptionPatient";
import DoctorSignup from "./pages/DoctorSignup";
import PatientLogin from "./pages/PatientLogin";
import PatientSignup from "./pages/PatientSignup";
import DoctorDashboard from "./pages/DoctorDashboard";
import PatientDashboard from "./pages/PatientDashboard";
import Logout from "./components/Logout";
import GetAppointment from "./pages/GetAppointment";
import Features from "./pages/features/features";
import AiTools from "./pages/AiTools/AiTools.js";
import Prescription from "./pages/features/prescription/Prescription";
import Pcos from "./pages/AiTools/Pcos";
import Cervical from "./pages/AiTools/Cervical";
import BreastCancer from "./pages/AiTools/BreastCancer";
import DoctorList from "./pages/features/DoctorList/DoctorList";
import { AuthProvider } from "./components/context/Auth";
import ProtectedRoutes from "./components/ProtectedRoutes";
import doctorHistoryList from './pages/features/DoctorList/DoctorHistoryList';

const App = () => {
  return (
    <>
      <Router>
        <AuthProvider>
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/doctorlogin" component={DoctorLogin} />
            <Route path="/doctorsignup" component={DoctorSignup} />
            <Route path="/patientsignup" component={PatientSignup} />
            <Route path="/patientlogin" component={PatientLogin} />
            <Route path="/doctordashboard" component={DoctorDashboard} />
            <Route path="/patientdashboard" component={PatientDashboard} />
            <Route path="/Logout" component={Logout} />
            {/* <Route path="/getAppointment" component={GetAppointment} /> */}
            {/* <Route exact path="/chat" component={Chat} /> */}
            <ProtectedRoutes path="/getAppointment">
              <GetAppointment />
            </ProtectedRoutes>
            <Route path="/features" component={Features} />
            <Route path="/aitools" component={AiTools} />
            <ProtectedRoutes path="/prescription">
              <Prescription />
            </ProtectedRoutes>
            <Route path="/pcos" component={Pcos} />
            <Route path="/cervical" component={Cervical} />
            <Route path="/breastcancer" component={BreastCancer} />
            <Route path="/doctorlist" component={DoctorList} />
            
            <Route
              path="/uploadPrescriptionDoctor"
              component={NewPrescriptionDoctor}
            />
            <Route
              path="/uploadPrescriptionPatient"
              component={NewPrescriptionPatient}
            />
            <Route path="/doctorHistory" component={doctorHistoryList} />
          </Switch>

          <Footer />
        </AuthProvider>
      </Router>
    </>
  );
};

export default App;
