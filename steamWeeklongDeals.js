$(function() {
    function trimAfter(s) {
        var n = s.indexOf('?');
        return s.substring(0, n !== -1 ? n : s.length);
    }
    
    $.get('getDeals.php', function(data) {
        var $items = $(data).find('.item'),
            tableData = [];
        
        $items.each(function(idx, item) {
            var url = trimAfter($(item).find('a').attr('href'));
            tableData.push([url]);
        });
        
        $('#deals-table').dataTable({
            'data': tableData,
            'columns': [
                {'title': 'URL'}
            ]
        });
    });
});