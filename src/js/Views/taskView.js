import * as elements from '../base';

export const getInput = () => {
   return elements.elements.inputForm.value;
}

export const clearInput = () => {
    elements.elements.inputForm.value = '';
}

export const renderTask = (title, id) => {
    let markup = `<div class="card to-do__card mt-4 mb-4" id='${id}'>
    <div class="card-header to-do__card-header" style="font-size:18px;">
        <p class="text-primary">${title}</p>
    </div>
    <div class="card-body to-do__card-body">
        <a href="#" class="btn btn-primary">Move --></a>
        <button type="button" class="btn btn-danger">Delete</button>
    </div>
    </div>`;
    elements.elements.todoContainer.insertAdjacentHTML("beforeend", markup);
}