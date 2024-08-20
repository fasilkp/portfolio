function openPopup({ img, title, description, sourceCodeLink, previewLink, technologies, subHeading }) {
    const div = document.createElement('div');
    div.setAttribute('class', "popup-body");
    div.innerHTML = `
    <div class="popup-container" onblur="closePopup()">
			<div class="container">
				<div class="row justify-content-center">
					<div class="">
						<div class="card text-black">
							<div class="d-flex justify-content-end w-100">
								<i class="ri-close-large-line" style="font-size: 1.5rem; cursor:pointer" onclick="closePopup()"></i>
							</div>
							<img src=${img}
								class="card-img-top" alt="Apple Computer" />
							<div class="card-body">
								<div class="text-center">
									<h5 class="font-weight-bold m-0">${title}</h5>
                                    <u class="text-muted">${subHeading}</u>

								</div>
								<div>
                                <div class="d-flex justify-content-between mt-2">
                                    <b class='text-white'>Overview</b>
                                </div>
                                <div class="d-flex justify-content-between">
                                    <span>${description}</span>
                                </div>
									<div class="d-flex justify-content-between mt-2">
										<b class='text-white'>Technologies Used</b>
									</div>
									<div class="d-flex justify-content-between">
										<span>${technologies}</span>
									</div>
								</div>
								<div class="d-flex justify-content-between total font-weight-bold mt-4">
									<div class="d-flex justify-content-center">
                                    <a href="${sourceCodeLink}" target="_blank" class="btn btn-primary py-3 px-4 mr-2 d-flex align-items-center">Source code</a> 
                                    ${previewLink ? `<a href="${previewLink}" target="_blank" class="btn btn-white btn-outline-white py-3 px-4 d-flex align-items-center">Preview</a>` : ''}
                                    </div>
                                    
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
    `
    document.body.appendChild(div);
}


function closePopup(){
    document.querySelector(".popup-body").remove()
}

