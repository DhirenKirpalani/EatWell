const nameInput=document.getElementById('name-input')
const emailInput=document.getElementById('email-input')
const addBtn=document.getElementById('add-btn')
const tableBody=document.getElementById('table-body')
const updateNameInput=document.getElementById('update-name-input')
const updateEmailInput=document.getElementById('update-email-input')
const updateBtn=document.getElementById('update-btn')
const cancelBtn=document.getElementById('cancel-btn')
let user=json.parse(localStorage.getItem('users'))||[]
let currentUserId=null
const validRegex= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[]

