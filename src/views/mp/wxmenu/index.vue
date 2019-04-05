<template>
    <basic-container>
        <el-row :span="24">
            <el-col :md="4">
                <avue-tree :option="treeOption"
                           :data="treeData"
                           @node-click="nodeClick"/>
            </el-col>
            <el-col :md="20">
                <wechat :data="data"
                        @submit="submit"/>
            </el-col>
        </el-row>
    </basic-container>
</template>

<script>
    import wechat from "@/components/wechat/"
    import {addObj, getObj, putObj} from '@/api/mp/wxmenu'
    import {fetchAccountList} from '@/api/mp/wxaccount'
    import {mapGetters} from 'vuex'

    export default {
        components: {
            wechat
        },
        data() {
            return {
                data: {
                    button: []
                },
                treeOption: {
                    nodeKey: 'id',
                    addBtn: false,
                    menu: false,
                    props: {
                        labelText: '标题',
                        label: 'name',
                        value: 'appid',
                        children: 'children'
                    }
                },
                treeData: [],
                checkAppId: undefined
            };
        },
        created() {
            this.getAccountList()
        },
        computed: {
            ...mapGetters(['permissions'])
        },
        methods: {
            submit(form) {
                if (this.permissions.mp_wxmenu_add) {
                    addObj(this.checkAppId, form).then(data => {
                        this.$message.success("保存成功")
                    })
                } else {
                    this.$message.error("权限不足，不能保存");
                }
            },
            getAccountMenu() {
                getObj(this.checkAppId).then(response => {
                    if (response.data.data) {
                        this.data = JSON.parse(response.data.data)
                    } else {
                        this.data.button = []
                    }
                })
            },
            nodeClick(data) {
                this.checkAppId = data.appid
                this.data.button = []
                this.getAccountMenu()
            },
            getAccountList() {
                fetchAccountList().then(response => {
                    this.treeData = response.data.data
                })
            },
        }
    };
</script>

<style>
</style>
