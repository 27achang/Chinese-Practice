// Vocab Lists
/*
const week_5_words = ["\u5BB6\u4EBA\u56E2\u805A", "\u8F9E\u65E7\u8FCE\u65B0", "\u8D70\u4EB2\u8BBF\u53CB", "\u5BB6\u5BB6\u6237\u6237", "\u5E72\u5E72\u51C0\u51C0", "\u70DF\u82B1\u70AE\u7AF9", "\u821E\u9F99\u821E\u72EE", "\u4F20\u7EDF\u4E60\u4FD7", "\u4E92\u76F8\u795D\u798F", "\u70ED\u95F9\u559C\u5E86", "\u5409\u7965\u5982\u610F", "\u5E78\u798F\u5E73\u5B89", "\u5065\u5EB7\u957F\u5BFF", "\u6B65\u6B65\u9AD8\u5347", "\u7EA2\u7EA2\u706B\u706B"];
const week_6_words = ["\u5BD3\u610F", "\u9A71\u90AA", "\u6D41\u4F20", "\u5E86\u795D", "\u529E\u5E74\u8D27", "\u8D34\u6625\u8054", "\u62DC\u5E74", "\u5E74\u591C\u996D", "\u5927\u5403\u5927\u559D", "\u5E74\u5E74\u6709\u4F59", "\u706F\u706B\u901A\u660E", "\u82B1\u5F00\u5BCC\u8D35", "\u606D\u559C\u53D1\u8D22", "\u4E2D\u79CB\u56E2\u5706", "\u8D4F\u6708"];
const week_7_words = ["\u5112\u5BB6\u601D\u60F3", "\u8BDA\u5B9E\u5B88\u4FE1", "\u5C0A\u5E08\u91CD\u6559", "\u4EC1\u4E49\u9053\u5FB7", "\u5DF1\u6240\u4E0D\u6B32\uFF0C\u52FF\u65BD\u4E8E", "\u5F85\u4EBA\u63A5\u7269", "\u4E00\u8BFA\u5343\u91D1", "\u5C0A\u8001\u7231\u5E7C", "\u535A\u5927\u7CBE\u6DF1", "\u7CBE\u795E\u8D22\u5BCC", "\u624D\u534E\u6A2A\u6EA2", "\u4E3A\u4EBA\u5904\u4E16", "\u8868\u91CC\u5982\u4E00", "\u8A00\u884C\u4E00\u81F4", "\u7F8E\u5FB7"];
const week_8_words = ["\u54C1\u683C", "\u6210\u7EE9", "\u8D21\u732E", "\u4E00\u8A00\u65E2\u51FA\uFF0C\u9A77\u9A6C\u96BE", "\u535A\u5927\u7CBE\u6DF1", "\u4E00\u8A00\u4E5D\u9F0E", "\u4E30\u529F\u4F1F\u7EE9", "\u5149\u8F89\u707F\u70C2", "\u7231\u56FD\u7231\u5BB6", "\u611F\u5174\u8DA3", "\u8FD0\u52A8\u5458", "\u827A\u672F\u5BB6", "\u5BFC\u6F14", "\u6F14\u5458", "\u753B\u5BB6"];
const week_9_words = ["\u8EAB\u5FC3\u5065\u5EB7", "\u5F3A\u8EAB\u5065\u4F53", "\u5EF6\u5E74\u76CA\u5BFF", "\u5F00\u5FC3\u5FEB\u4E50", "\u8F7B\u677E\u6109\u60A6", "\u878D\u4F1A\u8D2F\u901A", "\u9EBB\u5C06", "\u821E\u8E48", "\u6B66\u6253", "\u53D6\u4EE3", "\u4F53\u9B44", "\u5A31\u4E50", "\u56F4\u68CB", "\u6DF1\u523B", "\u89C6\u4E3A"];
const week_12_words = ["\u540D\u80DC\u53E4\u8FF9", "\u5730\u5927\u7269\u535A", "\u7586\u57DF\u8FBD\u9614", "\u540D\u5C71\u5927\u5DDD", "\u5730\u5F62\u591A\u6837", "\u65E5\u65B0\u6708\u5F02", "\u96E8\u540E\u6625\u7B0B", "\u5D1B\u8D77", "\u96C4\u4F1F\u6C14\u9B44", "\u98CE\u683C\u591A\u6837", "\u5F62\u6001\u5404\u5F02", "\u9B45\u529B", "\u5E95\u8574\u6DF1\u539A", "\u6C14\u5019\u5B9C\u4EBA", "\u56DB\u5B63\u5982\u6625"]
const week_13_words = ["\u620F\u5267", "\u54C1\u79CD\u7E41\u591A", "\u56FD\u7CB9", "\u6210\u719F", "\u5B55\u80B2", "\u6291\u626C\u987F\u632B", "\u78E8\u706D", "\u521B\u59CB\u4EBA", "\u72EC\u5177\u4E00\u683C", "\u72EC\u6811\u4E00\u5E1C", "\u529F\u5E95\u6DF1\u539A", "\u8FFD\u6EAF", "\u6DF3\u6734", "\u8BEF\u6253\u8BEF\u649E", "\u6D3B\u7075\u6D3B\u73B0"];
const week_14_words = ["\u5DC5\u5CF0", "\u7531\u76DB\u800C\u8870", "\u5F00\u8F9F", "\u8BB4\u6B4C", "\u699C\u9996", "\u7231\u56FD\u5FE7\u6C11", "\u64C5\u957F", "\u4E30\u7891", "\u63E3\u6D4B", "\u8574\u542B", "\u77E5\u4E66\u8FBE\u7406", "\u5BBE\u5BA2\u6EE1\u5802", "\u5669\u8017", "\u9F13\u8D77\u52C7\u6C14", "\u5F20\u706F\u7ED3\u5F69"];
const week_16_words = ["\u6587\u623F\u56DB\u5B9D", "\u6587\u4EBA\u58A8\u5BA2", "\u7B14\u58A8\u7EB8\u781A", "\u58F0\u8A89", "\u8FFD\u6367", "\u878D\u4E3A\u4E00\u4F53", "\u5929\u4EBA\u5408\u4E00", "\u5947\u8FF9", "\u9610\u8FF0", "\u53E4\u8272\u53E4\u9999", "\u4EAD\u53F0\u697C\u9601", "\u5BCC\u4E3D\u5802\u7687", "\u96D5\u6881\u753B\u680B", "\u96C4\u4F1F\u58EE\u89C2", "\u505A\u5DE5\u7CBE\u7F8E"];
const week_17_words = ["\u6C11\u8C23", "\u541F\u5531", "\u7C97\u72B7\u8C6A\u653E", "\u5206\u8FA8", "\u6D69\u5982\u70DF\u6D77", "\u77ED\u5C0F\u7CBE\u608D", "\u5F62\u8C61\u751F\u52A8", "\u6D53\u90C1", "\u7470\u5B9D", "\u4F18\u7F8E\u52A8\u542C", "\u9057\u61BE", "\u4E3E\u4E16\u95FB\u540D", "\u4E2D\u56FD\u5143\u7D20", "\u5E7F\u4E3A\u6D41\u4F20", "\u6587\u5316\u6865\u6881"];
const thanksgiving_words = ["\u7C97\u72B7\u8C6A\u653E", "\u6D69\u5982\u70DF\u6D77", "\u77ED\u5C0F\u7CBE\u608D", "\u6D53\u90C1", "\u7470\u5B9D", "\u9057\u61BE", "\u4E3E\u4E16\u95FB\u540D", "\u6587\u5316\u6865\u6881", "\u6587\u623F\u56DB\u5B9D", "\u7B14\u58A8\u7EB8\u781A", "\u58F0\u8A89", "\u878D\u4E3A\u4E00\u4F53", "\u53E4\u8272\u53E4\u9999", "\u5BCC\u4E3D\u5802\u7687", "\u96C4\u4F1F\u58EE\u89C2", "\u505A\u5DE5\u7CBE\u7F8E"];
const week_20_words = ["\u505C\u6EDE", "\u6BC1\u706D", "\u969C\u788D", "\u63A9\u76D6", "\u5B89\u571F\u91CD\u8FC1", "\u671B\u800C\u5374\u6B65", "\u8001\u9F84\u5316", "\u51F8\u663E", "\u4F18\u52BF", "\u6D88\u5F31", "\u8B66\u6212\u7EBF", "\u60F0\u6027", "\u6311\u6218", "\u5F53\u52A1\u4E4B\u6025", "\u7ADE\u4E89\u529B"]
const week_21_words = ["\u6170\u85C9", "\u5C4A\u65F6", "\u8FBE\u5230", "\u7F51\u763E", "\u53DB\u9006", "\u542F\u53D1", "\u5FFD\u89C6", "\u9F13\u52B1", "\u6C14\u6C1B", "\u704C\u8F93", "\u6B32\u671B", "\u638C\u63E1", "\u6FC0\u53D1", "\u5E7D\u9ED8", "\u5927\u540C\u5C0F\u5F02"]
const week_22_words = ["\u535A\u5927\u7CBE\u6DF1", "\u7F8E\u5473\u4F73\u80B4", "\u5730\u5927\u7269\u535A", "\u793C\u4EEA\u4E4B\u90A6", "\u5473\u9053\u9C9C\u7F8E", "\u6C11\u4EE5\u98DF\u4E3A\u5929", "\u70F9\u996A\u827A\u672F", "\u683C\u8C03\u9AD8\u96C5", "\u4EAB\u8A89\u4E2D\u5916", "\u5357\u751C\u5317\u54B8", "\u4E1C\u9C9C\u897F\u9178", "\u9910\u684C\u793C\u4EEA", "\u4EE5\u8336\u4F1A\u53CB", "\u795D\u5BFF", "\u5FCC\u8BB3"]
const week_23_words = ["\u6C5F\u5C71\u79C0\u4E3D", "\u5982\u8BD7\u5982\u753B", "\u540D\u5C71\u5927\u5DDD", "\u4E1D\u7EF8\u4E4B\u8DEF", "\u589E\u6DFB", "\u6DB5\u76D6", "\u63A8\u8FDB", "\u9694\u9602", "\u8DE8\u8D8A", "\u5F18\u626C", "\u7EBD\u5E26", "\u5B97\u6559\u4FE1\u4EF0", "\u5B89\u5168\u53EF\u9760", "\u7ECF\u6D4E\u5B9E\u60E0", "\u5FEB\u6377\u8212\u9002"]
const week_25_words = ["\u521B\u9020\u53D1\u660E", "\u84EC\u52C3\u53D1\u5C55", "\u636E\u8BF4", "\u667A\u6167\u7ED3\u6676", "\u7A81\u98DE\u731B\u8FDB", "\u706B\u836F", "\u5370\u5237\u672F", "\u6307\u5357\u9488", "\u9020\u7EB8\u672F", "\u4E2D\u56FD\u9AD8\u94C1", "\u79FB\u52A8\u626B\u7801", "\u865A\u5047\u4FE1\u606F", "\u4E07\u7269\u4E92\u8054", "\u5927\u4F17\u4F20\u5A92", "\u7F51\u7EDC\u8BC8\u9A97"]
const week_26_words = ["\u73B0\u91D1", "\u5FAE\u4FE1", "\u4F18\u52BF", "\u52A3\u52BF", "\u5927\u6570\u636E", "\u4E91\u8BA1\u7B97", "\u7528\u9014", "\u8111\u529B\u52B3\u52A8", "\u865A\u62DF\u8D27\u5E01", "\u53D1\u5C55\u8D8B\u52BF", "\u968F\u65F6\u968F\u5730", "\u6A21\u62DF", "\u8033\u719F\u80FD\u8BE6", "\u4EBA\u5DE5\u667A\u80FD", "\u94C1\u996D\u7897"]
const week_29_words = ["\u9634\u9633\u4E94\u884C", "\u671B\u95FB\u95EE\u5207", "\u6309\u6469\u7A74\u4F4D", "\u7591\u96BE\u6742\u75C7", "\u9488\u7078", "\u522E\u75E7", "\u62D4\u7F50", "\u75CA\u6108", "\u9A71\u90AA\u6392\u6BD2", "\u9632\u6CBB\u75BE\u75C5", "\u98DF\u7597\u517B\u751F", "\u4E2D\u533B\u4E2D\u836F", "\u6D3B\u8840\u5316\u7600", "\u4EE5\u4EBA\u4E3A\u672C", "\u548C\u8C10\u7EDF\u4E00"]
const Q3_midterm_speaking_exam = ["\u559C\u6B22\u65C5\u6E38\u5417\uFF1F\u4F60\u53BB\u8FC7\u4E16\u754C\u4E0A\u54EA\u4E9B\u56FD\u5BB6\u3001\u5730\u533A\u3001\u57CE\u5E02\uFF1F\u4F60\u6700\u559C\u6B22\u54EA\u4E2A\u56FD\u5BB6\u3001\u5730\u533A\u3001\u57CE\u5E02\uFF1F\u4E3A\u4EC0\u4E48\uFF1F", "\u4EE5\u524D\u53BB\u8FC7\u4E2D\u56FD\u5417\uFF1F\u5982\u679C\u6709\u673A\u4F1A\u53BB\u4E2D\u56FD\uFF0C\u4F60\u6700\u60F3\u53BB\u54EA\u91CC\u89C2\u5149\u3001\u6E38\u89C8\uFF1F\u4E3A\u4EC0\u4E48\uFF1F", "\u4E2D\u56FD\u65C5\u884C\u671F\u95F4\uFF0C\u4F60\u6700\u60F3\u5750\u4EC0\u4E48\u4EA4\u901A\u5DE5\u5177\uFF1F\u4E3A\u4EC0\u4E48\uFF1F", "\u679C\u53BB\u4E2D\u56FD\u65C5\u6E38\uFF0C\u4F60\u6700\u60F3\u54C1\u5C1D\u4EC0\u4E48\u98CE\u5473\u7684\u4E48\u4E2D\u56FD\u7F8E\u98DF\uFF1F\u4E3A\u4EC0\u4E48\uFF1F", "\u56FD\u5404\u5730\u7684\u996E\u98DF\u4E60\u60EF\u5DEE\u5F02\u5F88\u5927\uFF0C\u6709\u201C\u5357\u751C\u5317\u54B8\uFF0C\u4E1C\u9C9C\u897F\u9178\u201D\u7684\u8BF4\u6CD5\uFF0C\u8BF7\u4F60\u89E3\u91CA\u4E00\u4E0B\u8FD9\u53E5\u8BDD\u7684\u5177\u4F53\u542B\u4E49\u662F\u4EC0\u4E48\u3002", "\u56FD\u4EBA\u5E38\u8BF4\u201C\u65E9\u5403\u597D\uFF0C\u5348\u5403\u9971\uFF0C\u665A\u5403\u5C11\u201D\uFF0C\u4F60\u80FD\u89E3\u91CA\u4E00\u4E0B\u8FD9\u53E5\u8BDD\u7684\u610F\u601D\u5417\uFF1F", "\u4EEC\u5BB6\u4F1A\u5E86\u795D\u4E2D\u56FD\u7684\u4F20\u7EDF\u8282\u65E5\u5417\uFF1F\u4F60\u6700\u559C\u6B22\u8FC7\u54EA\u4E2A\u4E2D\u56FD\u8282\u65E5\uFF1F\u4E3A\u4EC0\u4E48\uFF1F", "\u65E5\u805A\u9910\u540E\uFF0C\u4F60\u4F1A\u5E2E\u5988\u5988\u6536\u62FE\u7897\u7B77\u5417\uFF1F\u4F60\u89C9\u5F97\u4F60\u5E94\u8BE5\u5E2E\u7236\u6BCD\u505A\u5BB6\u52A1\u5417\uFF1F\u4E3A\u4EC0\u4E48\uFF1F", "\u6BCF\u5929\u90FD\u7528\u7535\u8111\u5417\uFF1F\u4F60\u4E00\u822C\u7528\u7535\u8111\u505A\u4EC0\u4E48\uFF1F", "\u89C9\u5F97\u7535\u8111\u5728\u54EA\u4E9B\u65B9\u9762\u6700\u6709\u7528\uFF1F\u5728\u5B66\u4E60\u6C49\u8BED\u65B9\u9762\uFF0C\u7535\u8111\u80FD\u4E3A\u4F60\u505A\u4EC0\u4E48\uFF1F", "\u4F60\u770B\u6765\uFF0C\u7535\u8111\u5BF9\u4F60\u7684\u5B66\u4E60\u548C\u751F\u6D3B\u5E26\u6765\u4E86\u54EA\u4E9B\u5F71\u54CD\uFF1F\u8BF7\u4E3E\u4F8B\u8BF4\u660E\u3002", "\u5BF9\u4E2D\u56FD\u7684\u4F20\u7EDF\u6587\u5316\u611F\u5174\u8DA3\u5417\uFF1F\u4E3A\u4EC0\u4E48\uFF1F", "\u770B\u8FC7\u4E2D\u533B\u5417\uFF1F\u4F60\u4EE5\u540E\u4F1A\u5C1D\u8BD5\u770B\u4E2D\u533B\u5417\uFF1F\u4E3A\u4EC0\u4E48\uFF1F", "\u4F60\u8BF4\u8BF4\u4E2D\u533B\u4E0E\u897F\u533B\u6709\u4F55\u533A\u522B\uFF1F", "\u56FD\u53E4\u4EE3\u56DB\u5927\u53D1\u660E\u662F\u4EC0\u4E48\uFF1F\u8BF7\u4F60\u4ECB\u7ECD\u5176\u4E2D\u7684\u4E00\u5927\u53D1\u660E\u5BF9\u4EBA\u7C7B\u7684\u8D21\u732E\u3002"];
const week_28_words = ["\u73AF\u5883\u6C61\u67D3", "\u6838\u80FD", "\u8017\u7AED", "\u77ED\u7F3A", "\u8D56\u4EE5\u751F\u5B58", "\u5783\u573E\u5206\u7C7B", "\u7269\u5C3D\u5176\u7528", "\u8854\u63A5", "\u964D\u89E3", "\u629B\u5F03", "\u4FB5\u8680", "\u5371\u5BB3", "\u914D\u5957\u7CFB\u7EDF", "\u751F\u6001\u6587\u660E", "\u50A8\u5B58"];
const week_30_words = ["\u653E\u5C04\u6027", "\u6392\u653E", "\u8D85\u8FC7", "\u571F\u58E4", "\u968F\u7740", "\u4E71\u780D\u6EE5\u4F10", "\u75AF\u72C2", "\u9891\u9891", "\u5E73\u8861", "\u5B81\u9759", "\u6E29\u5BA4\u6548\u5E94", "\u566A\u97F3", "\u63AA\u65BD", "\u5448\u73B0", "\u6362\u8A00\u4E4B"];
const week_31_words = ["\u65B0\u51A0\u75AB\u60C5", "\u4F17\u5FD7\u6210\u57CE", "\u622A\u81F3", "\u9694\u79BB", "\u79CD\u65CF\u6B67\u89C6", "\u6050\u614C", "\u4E9A\u88D4", "\u793E\u4F1A\u6495\u88C2", "\u67AA\u652F\u6CDB\u6EE5", "\u6108\u6F14\u6108\u70C8", "\u8206\u8BBA", "\u6124\u4E16\u5AC9\u4FD7", "\u6050\u60E7", "\u7B3C\u7F69", "\u606F\u606F\u76F8\u5173"];
*/
var vocab_lists = [week_5_words, week_6_words, week_7_words, week_8_words, week_9_words, week_12_words, week_13_words, week_14_words, week_16_words, week_17_words, thanksgiving_words, week_20_words, week_21_words, week_22_words, week_23_words, week_25_words, week_26_words, week_29_words, Q3_midterm_speaking_exam, week_28_words, week_30_words, week_31_words];

var word_list = [];
// Zero-indexed
var question_number = 0;
// Zero-indexed numbers
var order = [];
var correct_questions = 0;
var asked = 1;
var added_to_review = false;

// HTML DOM References
var body = document.querySelector("body");
var week_selection_div = document.getElementById("week_selection_div");
var week_selector = document.getElementById("week_selector");
var generate_list = document.getElementById("generate_list");

var quiz_div = document.getElementById("quiz_div");
var question_number_display = document.getElementById("question_number");
var vocab_id_display = document.getElementById("vocab_index");
var accuracy_display = document.getElementById("accuracy_label");
var question_controls_div = document.getElementById("question_controls_div");
var marking_div = document.getElementById("correct_incorrect_div");
var add_to_review_button = document.getElementById("add_to_review_button");

function week_updated(){
    var selected_index = week_selector.selectedIndex;
    var selected_text = week_selector.options[selected_index].value;
    if(selected_text !== "—— Select A Week ——") {
        generate_list.style.display = "block";
    }
    if(week_selector.options[0].value == "—— Select A Week ——"){
        document.querySelector("option").remove();
    };
}

function makeList(){
    var selected_index = week_selector.selectedIndex;
    if(week_selector.options[selected_index].value == "—— Select A Week ——"){
        alert("Please select a week.");
        return;
    }
    word_list = vocab_lists[selected_index];

    // Create the word order
    order = [];
    var random;
    for(var i = 0; i < word_list.length; i++){
        do{
            random = Math.floor(Math.random() * word_list.length);
        }while(order.includes(random));
        order.push(random);
        console.log("Adding " + random);
    }
    
    
    question_number_display.innerHTML = "#1";
    vocab_id_display.innerHTML = ("Phrase/Vocabulary Index: " + (order[0]+1));
    accuracy_display.style.display = "none";
    marking_div.style.display = "none";

    question_number = 0;
    correct_questions = 0;
    asked = 1;

    week_selection_div.style.display = "none";
    quiz_div.style.display = "block";
}

function selectMandarinVoice(msg){
    var voices = window.speechSynthesis.getVoices();
    for (var i = 0; i < voices.length; i++) {
        //if (voices[i].name == "Google 普通话（中国大陆）") {
        if(voices[i].lang == "zh-CN"){
            //voices[i].lang == "zh-CN"
            //voice = "Microsoft Yaoyao - Chinese (Simplified, PRC)"
            //voice = "Google&nbsp;\u666E\u901A\u8BDD(\u4E2D\u56FD\u5927\u9646)"
            msg.voice = voices[i];
            break;
        }
    }
    return msg;
}

function playWord(){
    if(window.speechSynthesis.speaking){
        console.error("speechSynthesis.speaking");
    }else{
        var word = word_list[order[question_number]];
        var msg = new SpeechSynthesisUtterance(word);
        marking_div.querySelectorAll("button").forEach((marking_button) => marking_button.removeAttribute("disabled"));
        marking_div.style.visibility = "visible";
        msg.lang = "zh-CN";
        msg.rate = 0.6;
        msg.pitch = 0.98;
        window.speechSynthesis.speak(selectMandarinVoice(msg));
    }
}

function nextWord(){
    if(question_number < (order.length-1)){
        question_number += 1;
        asked += 1;
        question_number_display.innerHTML = ("#" + (question_number + 1));
        vocab_id_display.innerHTML = ("Phrase/Vocabulary Index: " + (order[question_number]+1));
        add_to_review_button.disabled = false;
        added_to_review = false;
        marking_div.style.visibility = "hidden";
        review_div.style.display = "none";
    }else{
        alert("You've reached the end of the list!");
    }
}

function grade(correct){
    if(question_number == 1) accuracy_display.style.display = "block";
    marking_div.querySelectorAll("button").forEach((marking_button) => marking_button.disabled);
    if(correct){
        review_div.style.display = "inline-block";
        correct_questions += 1;
    }else{
        if (order[order.length] !== order[quesiton_number]) order.push(order[question_number]);
    }
    var accuracy = Math.round(correct_questions/asked*100*100)/100;
    var rounded = accuracy !== correct_questions/asked*100;
    rounded ? accuracy = "\u2248" + accuracy : console.log();
    console.log("Marked " + (correct ? "Correct" : "Incorrect") + "; Total Correct: " + correct_questions + "; Total Asked: " + asked + "; Accuracy: " + accuracy + "%");
    accuracy_display.innerHTML = ("Accuracy: " + accuracy + "%");
}

function addReview(){
    if(!added_to_review){
        added_to_review = true;
        add_to_review_button.disabled = true;
        if (order[order.length] !== order[question_number]) order.push(order[question_number]);
    }else{
        alert("You have already added this question to the review.")
    }
}

function selectNewList(){
    quiz_div.style.display = "none";
    week_selection_div.style.display = "block";
}