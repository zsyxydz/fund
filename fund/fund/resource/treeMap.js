const tree = {
    "rating_items": [
        { "item_name": "风格", "item_title": "风格配置", "item_description": "该客户的风格配置能力<strong style=\"color:#2161E8;\">一般</strong>，盈利贡献top3的风格是<strong style=\"color:#D53C38;\">偏热门股,弱势股</strong>，亏损贡献top3的风格是<strong style=\"color:#52C03B;\">大盘股,业绩缩水,中低估值</strong>", "item_value": -0.119569 },
        { "item_name": "行业", "item_title": "行业配置", "item_description": "该客户的行业配置能力<strong style=\"color:#52C03B;\">较弱</strong>，盈利贡献top3的行业是 <strong style=\"color:#D53C38;\">基建重工,大消费,TMT</strong>，亏损贡献top3的行业是<strong style=\"color:#52C03B;\">国防军工,大金融,周期资源</strong>", "item_value": -0.278462 },
        { "item_name": "择时", "item_title": "择时能力", "item_description": "该客户的择时能力<strong style=\"color:#2161E8;\">一般</strong>", "item_value": 0.033095 },
        { "item_name": "运气", "item_title": "运气能力", "item_description": "该客户的运气<strong style=\"color:#2161E8;\">一般</strong>", "item_value": -0.001231 },
        { "item_name": "佣金", "item_title": "佣金损耗", "item_description": "该客户的佣金损耗<strong style=\"color:#52C03B;\">很低</strong>", "item_value": -0.028956 }],
    "items": [{
        "kind": "style", "profit_rate": -0.11956924706978111, "diagnose":
        {
            "kind": "style", "diagnose_tags": [{ "kind": "red", "content": "最大盈利风格：偏热门股" },
            { "kind": "green", "content": "最大亏损风格：大盘股" }],
            "intro": "该收益率衡量的是客户选择投资风格的能力。如果一个客户总是能够跟上市场风格轮动的节奏，那么他的风格配置收益率就会比较高。",
            "profit_top_list": ["偏热门股", "弱势股"], "loss_top_list": ["大盘股", "业绩缩水", "中低估值"], "stocks": []
        },
        "contibution_item": [{ "name": "中低估值", "value": -3.6906586871183684, "percent": 0.0712160272700294 }, { "name": "弱势股", "value": 9.278680542911314, "percent": 0.12194626165892736 }, { "name": "业绩缩水", "value": -4.212577332681118, "percent": 0.07606467674193708 }, { "name": "大盘股", "value": -27.814653406216404, "percent": 0.27387706096085807 }, { "name": "偏热门股", "value": 14.482284176126466, "percent": 0.16697898299363972 }]
    },
    { "kind": "industry", "profit_rate": -0.2784616645772248, "diagnose": { "kind": "industry", "diagnose_tags": [{ "kind": "red", "content": "最大盈利行业：基建重工" }, { "kind": "green", "content": "最大亏损行业：国防军工" }], "intro": "该收益率衡量的是客户的行业选择能力。", "profit_top_list": ["基建重工", "大消费", "TMT"], "loss_top_list": ["国防军工", "大金融", "周期资源"], "stocks": [] }, "contibution_item": [{ "name": "国防军工", "value": -19.196924407323976, "percent": 0.2004636919165007 }, { "name": "大金融", "value": -14.693990155046821, "percent": 0.16291776626971266 }, { "name": "周期资源", "value": -4.09473492251116, "percent": 0.06854362986981613 }, { "name": "大健康", "value": -2.1788564722427064, "percent": 0.05049211001134957 }, { "name": "TMT", "value": 1.7856311587083216, "percent": 0.04674646923455661 }, { "name": "大消费", "value": 4.008189202697399, "percent": 0.06773518014984009 }, { "name": "基建重工", "value": 6.524519137996464, "percent": 0.09097825727079212 }] }, { "kind": "time", "profit_rate": 0.03309488641000624, "diagnose": { "kind": "time", "diagnose_tags": [{ "kind": "red", "content": "择时能力较好" }], "intro": "该收益率衡量的是客户整体仓位的把控能力。", "description": "该客户<strong style=\"color:#D53C38;\">择时能力较好</strong>，能够顺应大盘走势控制仓位，捕捉一定趋势或规避部分风险。", "profit_top_list": [], "loss_top_list": [], "stocks": [] }, "contibution_item": [] }, { "kind": "luck", "profit_rate": -0.0012311572868836656, "diagnose": { "kind": "luck", "diagnose_tags": [{ "kind": "green", "content": "运势平平" }], "intro": "该指标衡量的是客户收益中不能被选股与择时能力解释的，不可持续的运气成分。", "description": "该客户<strong style=\"color:#52C03B;\">运势平平</strong>，因为运气较差，收益率受到了拖累。", "profit_top_list": [], "loss_top_list": [], "stocks": [] }, "contibution_item": [] }, { "kind": "commission", "profit_rate": -0.028956353396531805, "diagnose": { "kind": "commission", "diagnose_tags": [{ "kind": "green", "content": "佣金损耗很低" }], "intro": "该指标衡量的是交易佣金对客户收益率的摩擦影响，是客户交易成本的主要构成部分。", "description": "该客户<strong style=\"color:#52C03B;\">佣金损耗很低</strong>，交易成本对客户收益的影响很小", "profit_top_list": [], "loss_top_list": [], "stocks": [] }, "contibution_item": [] }]
}



module.exports = tree