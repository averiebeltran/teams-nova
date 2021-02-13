class Badge {
    constructor(teamMember) {
        console.log(teamMember);
        this.template = `
            <div class="badge">
                <div class="name">
                    ` + teamMember.name + `
                </div>
                <ul class="info">
                    <li>ID: ` + teamMember.id + `</li>
                    <li>Email: ` + teamMember.email + `</li>`
                        switch(teamMember.constructor.name){
                            case "Manager":
                                `<li>Office number: ` + teamMember.officeNumber + `</li>`;
                                break;
                            case "Intern":
                                `<li>School: ` + teamMember.school + `</li>`;
                                break;
                            case "Engineer":
                                `<li>Github: ` + teamMember.github + `</li>`;
                                break;
                        }
                    `
                </ul>
            </div>
        `;

        this.badge = document.createRange().createContextualFragment(this.template);
        document.querySelector(".team-list").appendChild(this.badge);
    }

}

module.exports = Badge;