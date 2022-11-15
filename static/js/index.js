$(document).ready(function () {
    theater_show('클래식');
    // theater_show()
});

function theater_show(type) {
    let select_type = type;
    $('#perform_box').empty()

    $.ajax({
        type: 'GET',
        url: `/theater?type_give=${select_type}`,
        data: {},
        success: function (response) {
            //DB조건 추가시, 파일 타입 에러로 인해 JSON.parse()추가
            let list = JSON.parse(response['theater_list'])
            console.log(list)
            for (let i=0; i< 5; i++){
                let title = list[i]['TITLE']
                let date = list[i]['DATE']
                let img = list[i]['MAIN_IMG']
                let url = list[i]['ORG_LINK']
                let place = list[i]['PLACE']
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


function theater_search() {
    let codename = $('#performance option:selected').val();
    let query = $('#searchBar_input').val()

    $('#searchBar_input').empty()
    $('#search_box').empty()
    console.log(codename, query)

    $.ajax({
        type: 'GET',
        url: `/search?input_query=${query}`,
        data: {},
        success: function(response) {
            //DB조건 추가시, 파일 타입 에러로 인해 JSON.parse()추가
            let list = JSON.parse(response['search_result'])
            // console.log(list)
            for (let i=0; i<=list.length; i++){
                let title = list[i]['TITLE']
                let date = list[i]['DATE']
                let img = list[i]['MAIN_IMG']
                let url = list[i]['ORG_LINK']
                let place = list[i]['PLACE']
                console.log(title,date,img,url,place)

                let temp_html = `
                    <div class="perform_card">
                        <a href="${url}" target="_blank"><img src="${img}"></a>
                        <div class="card_info">
                            <p>${title}</p>
                            <p>${date}</p>
                            <p>${place}</p>
                        </div>
                        <button onclcick="review()">리뷰작성</button>
                    </div>`
                $('#search_box').append(temp_html)
            }
        }
    })
}



// function performSearch() {
//     let keyword = $('#searchBar_input').val()
//     $('#searchBar_input').empty()
//     $('#search_box').empty()
//     // console.log(keyword)
//
//     $.ajax({
//         type: "GET",
//         url: `http://openapi.seoul.go.kr:8088/6e4957636974686432346a6c614d7a/json/culturalEventInfo/1/5/ /${keyword}`,
//         data: {},
//         success: function (response) {
//             // console.log(response)
//             let perform = response['culturalEventInfo']['row']
//             for (let i=0; i<=perform.length; i++) {
//                 let title = perform[i]['TITLE']
//                 let date = perform[i]['DATE']
//                 let img = perform[i]['MAIN_IMG']
//                 let url = perform[i]['ORG_LINK']
//                 let place = perform[i]['PLACE']
//                 console.log(title)
//                 let temp_html = `
//                     <div class="perform_card">
//                         <a href="${url}" target="_blank"><img src="${img}"></a>
//                         <div class="card_info">
//                             <p>${title}</p>
//                             <p>${date}</p>
//                             <p>${place}</p>
//                         </div>
//                     </div>`
//                 $('#search_box').append(temp_html)
//             }
//         }
//     })
// }
//

