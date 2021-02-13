class Badge {
    constructor(teamMember) {
        this.template = `
            <div class="badge">
                <div class="name">
                    ` + teamMember.name + `
                </div>
                <ul class="info">
                    <li>ID: ` + teamMember.id + `</li>
                    <li>Email: ` + teamMember.email + `</li>
                    <li>` + this.getFinalListItem(teamMember) + `<li>
                </ul>
            </div>
        `;

        // console.log(this.template);
    }

    getFinalListItem(teamMember) {
        switch(teamMember.constructor.name){
            case "Manager":
                `Office number: ` + teamMember.officeNumber;
                break;
            case "Intern":
                `School: ` + teamMember.school;
                break;
            case "Engineer":
                `Github: ` + teamMember.github;
                break;
        }
    }

}

module.exports = Badge;