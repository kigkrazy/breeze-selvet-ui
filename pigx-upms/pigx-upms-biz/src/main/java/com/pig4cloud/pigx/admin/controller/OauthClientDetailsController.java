/*
 *
 *      Copyright (c) 2018-2025, lengleng All rights reserved.
 *
 *  Redistribution and use in source and binary forms, with or without
 *  modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 *  this list of conditions and the following disclaimer.
 *  Redistributions in binary form must reproduce the above copyright
 *  notice, this list of conditions and the following disclaimer in the
 *  documentation and/or other materials provided with the distribution.
 *  Neither the name of the pig4cloud.com developer nor the names of its
 *  contributors may be used to endorse or promote products derived from
 *  this software without specific prior written permission.
 *  Author: lengleng (wangiegie@gmail.com)
 *
 */

package com.pig4cloud.pigx.admin.controller;

import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.pig4cloud.pigx.admin.api.entity.SysOauthClientDetails;
import com.pig4cloud.pigx.admin.service.SysOauthClientDetailsService;
import com.pig4cloud.pigx.common.core.util.Query;
import com.pig4cloud.pigx.common.core.util.R;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

/**
 * <p>
 * 前端控制器
 * </p>
 *
 * @author lengleng
 * @since 2018-05-15
 */
@RestController
@RequestMapping("/client")
public class OauthClientDetailsController {
	@Autowired
	private SysOauthClientDetailsService sysOauthClientDetailsService;

	/**
	 * 通过ID查询
	 *
	 * @param id ID
	 * @return SysOauthClientDetails
	 */
	@GetMapping("/{id}")
	public SysOauthClientDetails get(@PathVariable Integer id) {
		return sysOauthClientDetailsService.selectById(id);
	}


	/**
	 * 分页查询信息
	 *
	 * @param params 分页对象
	 * @return 分页对象
	 */
	@GetMapping("/page")
	public Page page(@RequestParam Map<String, Object> params) {
		return sysOauthClientDetailsService.selectPage(new Query<>(params), new EntityWrapper<>());
	}

	/**
	 * 添加
	 *
	 * @param sysOauthClientDetails 实体
	 * @return success/false
	 */
	@PostMapping
	@PreAuthorize("@pms.hasPermission('sys_client_add')")
	public R<Boolean> add(@Valid @RequestBody SysOauthClientDetails sysOauthClientDetails) {
		return new R<>(sysOauthClientDetailsService.insert(sysOauthClientDetails));
	}

	/**
	 * 删除
	 *
	 * @param id ID
	 * @return success/false
	 */
	@DeleteMapping("/{id}")
	@PreAuthorize("@pms.hasPermission('sys_client_del')")
	public R<Boolean> delete(@PathVariable String id) {
		SysOauthClientDetails sysOauthClientDetails = new SysOauthClientDetails();
		sysOauthClientDetails.setClientId(id);
		return new R<>(sysOauthClientDetailsService.deleteById(sysOauthClientDetails));
	}

	/**
	 * 编辑
	 *
	 * @param sysOauthClientDetails 实体
	 * @return success/false
	 */
	@PutMapping
	@PreAuthorize("@pms.hasPermission('sys_client_edit')")
	public R<Boolean> edit(@Valid @RequestBody SysOauthClientDetails sysOauthClientDetails) {
		return new R<>(sysOauthClientDetailsService.updateById(sysOauthClientDetails));
	}
}
