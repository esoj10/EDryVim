import Page from "./page";

class LitteraPage extends Page {
    get devURL() { return "https://dev.login.litteraeducation.com/"; }
    get stageURL() { return "https://staging.login.litteraeducation.com/"; }
    get btnSumit() {
        return "button[type='submit']";
    }

    get inputEmail() {
        return '#email';
    }
    get inputPassword() {
        return '#password';
    }

    LoginOrgAdmin() {
        cy.fixture('littera.json').then((data) => {
            const orgAdmin = data.orgAdmin;
            this.LoginData(orgAdmin);
        })
    }

    LoginTutor() {
        cy.fixture('littera.json').then((data) => {
            const tutor = data.tutor;
            this.LoginData(tutor);
        })
    }

    LoginTeacher() {
        cy.fixture('littera.json').then((data) => {
            const teacher = data.teacher;
            this.LoginData(teacher);
        })
    }

    LoginTeamLead() {
        cy.fixture('littera.json').then((data) => {
            const teamLead = data.teamLead;
            this.LoginData(teamLead);
        })
    }

    LoginStudentMail() {
        cy.fixture('littera.json').then((data) => {
            const student_email = data.student.email;
            this.LoginData(student_email);
        })
    }
    LoginStudentUsername() {
        cy.fixture('littera.json').then((data) => {
            const student_username = data.student.username;
            this.LoginData(student_username);
        })
    }

    LoginData(user: any) {
        cy.get(this.inputEmail).type(user.email);
        cy.get(this.inputPassword).type(user.password);
        cy.get(this.btnSumit).click();
    }
}

export default new LitteraPage();