const d = {
    "items":
        [
            {
                "kind": "style", "profit_rate": 0.1013038437066765,
                "diagnose": {
                    "kind": "style",
                    "diagnose_tags": [{ "kind": "red", "content": "最大盈利风格：大盘股" }],
                    "intro": "该收益率衡量的是客户选择投资风格的能力。如果一个客户总是能够跟上市场风格轮动的节奏，那么他的风格配置收益率就会比较高。",
                    "profit_top_list": ["大盘股", "业绩增长", "中低估值"],
                    "loss_top_list": [], "stocks": []
                },
                "contibution_item": [
                    { "name": "业绩增长", "value": 3.23588077052557, "percent": 0.0323588077052557 },
                    { "name": "中低估值", "value": 1.9451221653404818, "percent": 0.019451221653404818 },
                    { "name": "大盘股", "value": 4.9493814348016, "percent": 0.049493814348015995 }]
            },
            {
                "kind": "industry", "profit_rate": 0.22862415411559794,
                "diagnose": {
                    "kind": "industry",
                    "diagnose_tags": [{ "kind": "red", "content": "最大盈利行业：大健康" }, { "kind": "green", "content": "最大亏损行业：大金融" }],
                    "intro": "该收益率衡量的是客户的行业选择能力。",
                    "profit_top_list": ["TMT", "国防军工", "基建重工"],
                    "loss_top_list": ["大金融", "大消费"], "stocks": []
                },
                "contibution_item": [
                    { "name": "大金融", "value": -7.705988763499759, "percent": 0.10170775130113778 },
                    { "name": "大消费", "value": -5.481385785874743, "percent": 0.0814084126972039 },
                    { "name": "综合", "value": 0.18213265202428494, "percent": 0.031325518853266635 }, { "name": "大健康", "value": 0.9994592515690589, "percent": 0.03921551363562017 }, { "name": "周期资源", "value": 1.5822609543498547, "percent": 0.04480376191427223 }, { "name": "基建重工", "value": 2.1580711790901885, "percent": 0.050294471931795454 }, { "name": "国防军工", "value": 14.35828870501436, "percent": 0.16006136615387373 }, { "name": "TMT", "value": 16.76957721888655, "percent": 0.18039952102342682 }
                ]
            }, {
                "kind": "time", "profit_rate": -0.13790718323144913,
                "diagnose": {
                    "kind": "time",
                    "diagnose_tags": [{ "kind": "green", "content": "两边打脸" }],
                    "intro": "该收益率衡量的是客户整体仓位的把控能力。",
                    "description": "该基金<strong style=\"color:#52C03B;\">两边打脸</strong>，经常逆大盘走向，对仓位控制能力较差。",
                    "profit_top_list": [],
                    "loss_top_list": [],
                    "stocks": []
                },
                "linechart": {
                    "start_date": "20140930", "end_date": "20181017",
                }
            }
        ]
}