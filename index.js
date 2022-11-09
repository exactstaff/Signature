const form = document.querySelector('form')
// -----signature-----
const EmployeeName = document.querySelector("#EMPLOYEE-NAME");
const EmployeePosition = document.querySelector("#EMPLOYEE-POSITION");
const OfficeAddress = document.querySelector('address');
const OfficeNumber = document.querySelector('#OFFICE-NUMBER');
const OfficeFax = document.querySelector('#OFFICE-FAX');
const EmployeeCell = document.querySelector('#EMPLOYEE-CELL');
const EmployeeEmail = document.querySelector('#EMPLOYEE-EMAIL');
// -----button-----
const FormButton = document.querySelector('BUTTON')
const select = document.querySelector('select')

const offices = [
    {
        "name": "Calabasas",
        "address": "23901 Calabasas Rd Suite #1085",
        "city":"Calabasas",
        "state": "CA",
        "zipcode": "91302",
        "phone":"(818) 348-1100",
        "fax":"(818) 348-4949"
    },
    {
        "name": "Bakersfield",
        "address": "1430 Truxtun Avenue, #725",
        "city":"Bakersfield",
        "state": "CA",
        "zipcode": "93301",
        "phone":"(661) 393-9700",
        "fax":"(661) 393-9702"
    },
    {
        "name": "Fresno",
        "address": "7413 N. Cedar Ave. #102",
        "city":"Fresno",
        "state": "CA",
        "zipcode": "93720",
        "phone":"(818) 348-1100",
        "fax":"(818) 348-4949"
    },
    {
        "name": "Gardena/Torrance",
        "address": "19300 S Hamilton Ave #255",
        "city":"Gardena",
        "state": "CA",
        "zipcode": "90284",
        "phone":"(310) 329-1900",
        "fax":"(310) 329-0300"
    },
    {
        "name": "Oxnard",
        "address": "500 Esplanade Drive #810",
        "city":"Oxnard",
        "state": "CA",
        "zipcode": "93036",
        "phone":"(805) 604-9922",
        "fax":"(805) 604-9933"
    },
    {
        "name": "Ontario",
        "address": "3990 Concours St Suite #200",
        "city":"Ontario",
        "state": "CA",
        "zipcode": "91764",
        "phone":"(909) 476-9000",
        "fax":"(909) 476-9033"
    },
    {
        "name": "Sacramento/Woodland",
        "address": "3900 Lennane Drive, #130",
        "city":"Sacramento",
        "state": "CA",
        "zipcode": "95834",
        "phone":"(530) 669-1300",
        "fax":"(530) 669-1304"
    },
    {
        "name": "Valencia/Santa Clarita",
        "address": "25250 Magic Mountain Parkway, #150",
        "city":"Valencia",
        "state": "CA",
        "zipcode": "91355",
        "phone":"(661) 295-3811",
        "fax":"(661) 295-3812"
    },
    {
        "name": "Fresno",
        "address": "7413 N. Cedar Ave. #102",
        "city":"Fresno",
        "state": "CA",
        "zipcode": "93720",
        "phone":"(818) 348-1100",
        "fax":"(818) 348-4949"
    },    
    {
        "name": "Maryland",
        "address": "1414 W. Pulaski Highway Suite A",
        "city":"Elkton",
        "state": "MD",
        "zipcode": "21921",
        "phone":"(410) 287-8899",
        "fax":"(410) 287-8099"
    },
    {
        "name": "   Oregon",
        "address": "2225 Pacific Blvd SE #209",
        "city":"Albany",
        "state": "OR",
        "zipcode": "97321",
        "phone":"(541) 444-0800",
        "fax":"(541) 666-2381"
    },
    {
        "name": "Texas",
        "address": "661 E. Main St. #200-247",
        "city":"Midlothian",
        "state": "TX",
        "zipcode": "76065"
    },
    {
        "name": "Modesto/Turlock",
        "address": "935 W 18th St.",
        "city":"Merced",
        "state": "CA",
        "zipcode": "95340"
    },
    {
        "name": "Kansas",
        "address": "6021 SW 29th St. Ste A #311",
        "city":"Topeka",
        "state": "KS",
        "zipcode": "66614"
    }
]

function officeFormatter(key){
    OfficeAddress.innerHTML = `
    ${offices[0].address}<br/>
    ${offices[0].city},${offices[0].state} ${offices[0].zipcode}
    `;
    OfficeNumber.innerHTML = `Tel: ${offices[0].phone}`
    OfficeFax.innerHTML =`Fax: ${offices[0].fax}`
}

offices.forEach(function(element, key){
    select[key] = new Option(element.name, element.key)
})

function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      return '(' + match[1] + ') ' + match[2] + '-' + match[3];
    }
    return null;
  }

function handleSubmit(e){
    e.preventDefault();
    const newEmployee = {
        name: e.currentTarget.name.value,
        position: e.currentTarget.position.value,
        location: e.currentTarget.location.value,
        email: e.currentTarget.email.value,
        cell: e.currentTarget.cell.value
    }
    EmployeeName.innerHTML = newEmployee.name
    EmployeePosition.innerHTML = newEmployee.position
    if (newEmployee.cell != ""){
    EmployeeCell.innerHTML = `Cell: ${formatPhoneNumber(newEmployee.cell)}`}
    EmployeeEmail.innerHTML = newEmployee.email
    
    document.querySelector('#EMPLOYEE-EMAIL').href = `mailto:${newEmployee.email}`

    switch(select.value){
        case "Calabasas":
            OfficeAddress.innerHTML = `
            ${offices[0].address}<br/>
            ${offices[0].city},${offices[0].state} ${offices[0].zipcode}
            `;
            OfficeNumber.innerHTML = `Tel: ${offices[0].phone}`
            OfficeFax.innerHTML =`Fax: ${offices[0].fax}`
            break;
        case "Bakersfield":
            OfficeAddress.innerHTML = `
            ${offices[1].address}<br/>
            ${offices[1].city},${offices[1].state} ${offices[1].zipcode}
            `;
            OfficeNumber.innerHTML = `Tel: ${offices[1].phone}`
            OfficeFax.innerHTML =`Fax: ${offices[1].fax}`
        break;
        case "Fresno":
            OfficeAddress.innerHTML = `
            ${offices[2].address}<br/>
            ${offices[2].city},${offices[2].state} ${offices[2].zipcode}
            `;
            OfficeNumber.innerHTML = `Tel: ${offices[2].phone}`
            OfficeFax.innerHTML =`Fax: ${offices[2].fax}`
            break;
        case "Gardena/Torrance":
            OfficeAddress.innerHTML = `
            ${offices[3].address}<br/>
            ${offices[3].city},${offices[3].state} ${offices[3].zipcode}
            `;
            OfficeNumber.innerHTML = `Tel: ${offices[3].phone}`
            OfficeFax.innerHTML =`Fax: ${offices[3].fax}`
            break;
        case "Oxnard":
            OfficeAddress.innerHTML = `
            ${offices[4].address}<br/>
            ${offices[4].city},${offices[4].state} ${offices[4].zipcode}
            `;
            OfficeNumber.innerHTML = `Tel: ${offices[4].phone}`
            OfficeFax.innerHTML =`Fax: ${offices[4].fax}`
            break;
        case "Rancho Cucamonga":
            OfficeAddress.innerHTML = `
            ${offices[5].address}<br/>
            ${offices[5].city},${offices[5].state} ${offices[5].zipcode}
            `;
            OfficeNumber.innerHTML = `Tel: ${offices[5].phone}`
            OfficeFax.innerHTML =`Fax: ${offices[5].fax}`
            break;
        case "Sacramento/Woodland":
            OfficeAddress.innerHTML = `
            ${offices[6].address}<br/>
            ${offices[6].city},${offices[6].state} ${offices[6].zipcode}
            `;
            OfficeNumber.innerHTML = `Tel: ${offices[6].phone}`
            OfficeFax.innerHTML =`Fax: ${offices[6].fax}`
            break;
        case "Valencia/Santa Clarita":
            OfficeAddress.innerHTML = `
            ${offices[7].address}<br/>
            ${offices[7].city},${offices[7].state} ${offices[7].zipcode}
            `;
            OfficeNumber.innerHTML = `Tel: ${offices[7].phone}`
            OfficeFax.innerHTML =`Fax: ${offices[7].fax}`
            break;
        case "Fresno":
            OfficeAddress.innerHTML = `
            ${offices[8].address}<br/>
            ${offices[8].city},${offices[8].state} ${offices[8].zipcode}
            `;
            OfficeNumber.innerHTML = `Tel: ${offices[8].phone}`
            OfficeFax.innerHTML =`Fax: ${offices[8].fax}`
            break;
        case "Maryland":
            OfficeAddress.innerHTML = `
            ${offices[9].address}<br/>
            ${offices[9].city},${offices[9].state} ${offices[9].zipcode}
            `;
            OfficeNumber.innerHTML = `Tel: ${offices[9].phone}`
            OfficeFax.innerHTML =`Fax: ${offices[9].fax}`
            break;
        case "Oregon":
            OfficeAddress.innerHTML = `
            ${offices[10].address}<br/>
            ${offices[10].city},${offices[10].state} ${offices[10].zipcode}
            `;
            OfficeNumber.innerHTML = `Tel: ${offices[10].phone}`
            OfficeFax.innerHTML =`Fax: ${offices[10].fax}`
            break;
        case "Texas":
            OfficeAddress.innerHTML = `
            ${offices[11].address}<br/>
            ${offices[11].city},${offices[11].state} ${offices[11].zipcode}
            `;
            OfficeNumber.innerHTML = ``;
            OfficeFax.innerHTML =``;
            document.querySelector('#INFO-SEPERATOR').style.display = "none";
            break;
        case "Modesto/Turlock":
            OfficeAddress.innerHTML = `
            ${offices[12].address}<br/>
            ${offices[12].city},${offices[12].state} ${offices[12].zipcode}
            `;
            document.querySelector('#INFO-SEPERATOR').style.display = "none";
            OfficeNumber.innerHTML = ``;
            OfficeFax.innerHTML =``;
            break;
        case "Kansas":
            OfficeAddress.innerHTML = `
            ${offices[13].address}<br/>
            ${offices[13].city},${offices[13].state} ${offices[13].zipcode}
            `;
            document.querySelector('#INFO-SEPERATOR').style.display = "none";
            OfficeNumber.innerHTML = ``;
            OfficeFax.innerHTML =``;
            break;
        default:
        OfficeAddress.innerHTML ="No Valid Location"
    }
}

form.addEventListener('submit', handleSubmit)

