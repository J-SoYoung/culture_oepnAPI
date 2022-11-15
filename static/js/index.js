$(document).ready(function () {
    performList('클래식');
});

function performList(type) {
    let performType = type
    $('#perform_box').empty()
    // console.log(performType)

    $.ajax({
        type: "GET",
        url: `http://openapi.seoul.go.kr:8088/6e4957636974686432346a6c614d7a/json/culturalEventInfo/1/5/${performType}`,
        data: {},
        success: function (response) {
            let perform = response['culturalEventInfo']['row']
            for (let i=0; i<=perform.length; i++){
                // console.log(perform[i])
                let title = perform[i]['TITLE']
                let date = perform[i]['DATE']
                let img = perform[i]['MAIN_IMG']
                let url = perform[i]['ORG_LINK']
                let place = perform[i]['PLACE']
                // console.log(title,date,img,url,place)
                let temp_html = `
                    <div class="perform_card">
                        <a href="${url}" target="_blank"><img src="${img}"></a>
                        <div class="card_info">
                            <p>${title}</p>
                            <p>${date}</p>
                            <p>${place}</p>
                        </div>
                    </div>`
                $('#perform_box').append(temp_html)
            }
        }
    })
}

function performSearch() {
    let keyword = $('#searchBar_input').val()
    $('#searchBar_input').empty()
    $('#search_box').empty()
    // console.log(keyword)

    $.ajax({
        type: "GET",
        url: `http://openapi.seoul.go.kr:8088/6e4957636974686432346a6c614d7a/json/culturalEventInfo/1/5/ /${keyword}`,
        data: {},
        success: function (response) {
            // console.log(response)
            let perform = response['culturalEventInfo']['row']
            for (let i=0; i<=perform.length; i++) {
                let title = perform[i]['TITLE']
                let date = perform[i]['DATE']
                let img = perform[i]['MAIN_IMG']
                let url = perform[i]['ORG_LINK']
                let place = perform[i]['PLACE']
                console.log(title)
                let temp_html = `
                    <div class="perform_card">
                        <a href="${url}" target="_blank"><img src="${img}"></a>
                        <div class="card_info">
                            <p>${title}</p>
                            <p>${date}</p>
                            <p>${place}</p>
                        </div>
                    </div>`
                $('#search_box').append(temp_html)
            }
        }
    })
}