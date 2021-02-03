module.exports = {
  docs: [
    {
      type: 'category',
      label: '概览',
      items: [
        'about/chaos_mesh',
        'about/architecture',
      ],
    },
    {
      type: 'category',
      label: '安装部署',
      items: [
        `installation/quick_start`,
        `installation/install_by_helm`,
        `installation/install_offline`,
      ],
    },
    {
      type: 'category',
      label: '权限管理',
      items: [
        `authentication/roles_manage`,
        `authentication/config_protected_namespace`,
      ],
    },
    {
      type: 'category',
      label: '使用指导',
      items: [
        `user_guides/run_chaos_experiment`,
        `user_guides/experiment_scope`,
        `user_guides/scheduler_rule`,
        `user_guides/chaos_experiment_result`,
        `user_guides/clean_chaos_experiment`,
      ],
    },
    {
      type: 'category',
      label: '混沌实验',
      items: [
        `chaos_experiments/podchaos_experiment`,
        `chaos_experiments/networkchaos_experiment`,
        `chaos_experiments/dnschaos_experiment`,
        `chaos_experiments/stresschaos_experiment`,
        `chaos_experiments/iochaos_experiment`,
        `chaos_experiments/timechaos_experiment`,
        `chaos_experiments/jvmchaos_experiment`,
        `chaos_experiments/kernelchaos_experiment`,
        `chaos_experiments/awschaos_experiment`,
      ],
    },
    {
      type: 'category',
      label: '物理节点混沌实验',
      items: [
        'chaos_experiments_physic_node/chaosd',
        `chaos_experiments_physic_node/processchaos_experiment`,
        `chaos_experiments_physic_node/networkchaos_experiment`,
        `chaos_experiments_physic_node/stresschaos_experiment`,
      ],
    },
    {
      type: 'category',
      label: 'Workflows',
      items: [],
    },
    {
      type: 'category',
      label: '案例介绍',
      items: [
        `use_cases/multi_data_centers`,
      ],
    },
    {
      type: 'category',
      label: '开发者文档',
      items: [
        `development_guides/development_overview`,
        `development_guides/set_up_the_development_environment`,
        `development_guides/develop_a_new_chaos`,
        `development_guides/add_facilities_to_chaos_daemon`,
        `development_guides/add_chaos_chaosd`,
      ],
    },
    {
      type: 'category',
      label: '工具整合',
      items: [
        `integrations/github_action`,
        `integrations/argo`,
        `integrations/grafana`,
      ],
    },
    {
      type: 'category',
      label: '客户端',
      items: [
        `clients/go_client`,
        `clients/rust_client`,
        `clients/java_client`,
        `clients/python_client`,
      ],
    },
    {
      type: 'category',
      label: '混沌工程资料',
      items: [
        `chaos_engineering/chaos_engineering`,
        `chaos_engineering/resources`,
      ],
    },
    'faqs',
  ],
}
