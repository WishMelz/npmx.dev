var resource = {
	"$schema": {
		"t": 0,
		"b": {
			"t": 2,
			"i": [{ "t": 3 }],
			"s": "../schema.json"
		}
	},
	"built_at": {
		"t": 0,
		"b": {
			"t": 2,
			"i": [{
				"t": 3,
				"v": "generado "
			}, {
				"t": 5,
				"i": 0
			}]
		}
	},
	"alt_logo": {
		"t": 0,
		"b": {
			"t": 2,
			"i": [{ "t": 3 }],
			"s": "logo de npmx"
		}
	},
	"shortcuts": { "settings": {
		"t": 0,
		"b": {
			"t": 2,
			"i": [{ "t": 3 }],
			"s": "Abrir configuración"
		}
	} },
	"auth": { "modal": { "default_input_error": {
		"t": 0,
		"b": {
			"t": 2,
			"i": [{ "t": 3 }],
			"s": "Por favor, ingresa un handle, DID o URL de PDS válido"
		}
	} } },
	"connector": { "modal": {
		"connected_hint": {
			"t": 0,
			"b": {
				"t": 2,
				"i": [{ "t": 3 }],
				"s": "Ahora puedes administrar paquetes y organizaciones desde la interfaz web."
			}
		},
		"run_hint": {
			"t": 0,
			"b": {
				"t": 2,
				"i": [{ "t": 3 }],
				"s": "Ejecuta el conector en tu computadora para habilitar funciones de administración."
			}
		}
	} },
	"about": { "what_we_are": { "admin_description": {
		"t": 0,
		"b": {
			"t": 2,
			"i": [
				{
					"t": 3,
					"v": "También aspiramos a proporcionar una mejor "
				},
				{
					"t": 4,
					"k": "adminUi"
				},
				{
					"t": 3,
					"v": " para administrar tus paquetes, equipos y organizaciones — todo desde el navegador, impulsado por tu CLI de npm local."
				}
			]
		}
	} } },
	"claim": { "modal": {
		"checking": {
			"t": 0,
			"b": {
				"t": 2,
				"i": [{ "t": 3 }],
				"s": "Verificando disponibilidad..."
			}
		},
		"failed_to_check": {
			"t": 0,
			"b": {
				"t": 2,
				"i": [{ "t": 3 }],
				"s": "Error al verificar disponibilidad del nombre"
			}
		}
	} },
	"package": {
		"readme": { "title": {
			"t": 0,
			"b": {
				"t": 2,
				"i": [{ "t": 3 }],
				"s": "Léame"
			}
		} },
		"access": {
			"grant_button": {
				"t": 0,
				"b": {
					"t": 2,
					"i": [{ "t": 3 }],
					"s": "otorgar"
				}
			},
			"cancel_grant": {
				"t": 0,
				"b": {
					"t": 2,
					"i": [{ "t": 3 }],
					"s": "Cancelar otorgar acceso"
				}
			},
			"grant_access": {
				"t": 0,
				"b": {
					"t": 2,
					"i": [{ "t": 3 }],
					"s": "+ Otorgar acceso de equipo"
				}
			}
		},
		"versions": { "copy_alt": { "general_description": {
			"t": 0,
			"b": {
				"t": 2,
				"i": [
					{
						"t": 3,
						"v": "Gráfica de barras que muestra las descargas por versión para "
					},
					{
						"t": 4,
						"k": "versions_count"
					},
					{
						"t": 3,
						"v": " versiones "
					},
					{
						"t": 4,
						"k": "semver_grouping_mode"
					},
					{
						"t": 3,
						"v": " del paquete "
					},
					{
						"t": 4,
						"k": "package_name"
					},
					{
						"t": 3,
						"v": ", "
					},
					{
						"t": 4,
						"k": "date_range_label"
					},
					{
						"t": 3,
						"v": " desde la versión "
					},
					{
						"t": 4,
						"k": "first_version"
					},
					{
						"t": 3,
						"v": " hasta la versión "
					},
					{
						"t": 4,
						"k": "last_version"
					},
					{
						"t": 3,
						"v": ". La versión más descargada es "
					},
					{
						"t": 4,
						"k": "max_downloaded_version"
					},
					{
						"t": 3,
						"v": " con "
					},
					{
						"t": 4,
						"k": "max_version_downloads"
					},
					{
						"t": 3,
						"v": " descargas. "
					},
					{
						"t": 4,
						"k": "per_version_analysis"
					},
					{
						"t": 3,
						"v": ". "
					},
					{
						"t": 4,
						"k": "watermark"
					},
					{
						"t": 3,
						"v": "."
					}
				]
			}
		} } },
		"trends": { "copy_alt": { "compare": {
			"t": 0,
			"b": {
				"t": 2,
				"i": [
					{
						"t": 3,
						"v": "Gráfica de líneas de comparación de descargas de paquetes para: "
					},
					{
						"t": 4,
						"k": "packages"
					},
					{
						"t": 3,
						"v": "."
					}
				]
			}
		} } }
	},
	"compare": {
		"no_dependency": {
			"typeahead_description": {
				"t": 0,
				"b": {
					"t": 2,
					"i": [{ "t": 3 }],
					"s": "¡Compara contra no usar una dependencia! Aprobado por e18e."
				}
			},
			"tooltip_description": {
				"t": 0,
				"b": {
					"t": 2,
					"i": [
						{
							"t": 3,
							"v": "¡Compara contra no usar una dependencia! La "
						},
						{
							"t": 4,
							"k": "link"
						},
						{
							"t": 3,
							"v": " mantiene una lista de paquetes que pueden ser reemplazados con APIs nativas o alternativas más simples."
						}
					]
				}
			}
		},
		"file_filter_option": { "added": {
			"t": 0,
			"b": {
				"t": 2,
				"i": [
					{
						"t": 3,
						"v": "Agregados ("
					},
					{
						"t": 4,
						"k": "count"
					},
					{
						"t": 3,
						"v": ")"
					}
				]
			}
		} },
		"filter": { "added": {
			"t": 0,
			"b": {
				"t": 2,
				"i": [{ "t": 3 }],
				"s": "agregado"
			}
		} }
	},
	"a11y": { "welcome": {
		"t": 0,
		"b": {
			"t": 2,
			"i": [
				{
					"t": 3,
					"v": "Queremos que "
				},
				{
					"t": 4,
					"k": "app"
				},
				{
					"t": 3,
					"v": " sea utilizable por la mayor cantidad de personas posible."
				}
			]
		}
	} }
};

export { resource as default };
//# sourceMappingURL=es-419-BWcxrQIb.mjs.map
