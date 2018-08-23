namespace AngularEventSite.Web.Configuration
{
    using System;

    using AutoMapper;

    using StructureMap;
    using StructureMap.Graph;
    using StructureMap.Graph.Scanning;
    using StructureMap.TypeRules;

    /// <summary>
    /// Finds all AutoMapper profile type and checks if the profile type has accessible constructors, if not it will <c>throw</c> an exception. 
    /// Accessible constructors are needed for IoC.
    /// </summary>
    public class AutoMapperProfileConvention : IRegistrationConvention
    {
        private readonly Type pluginType;

        /// <summary>
        /// Initializes a new instance of the <see cref="AutoMapperProfileConvention"/> class.
        /// </summary>
        public AutoMapperProfileConvention()
        {
            pluginType = typeof(Profile);
        }

        /// <inheritdoc />
        public void ScanTypes(TypeSet types, Registry registry)
        {
            foreach (var type in types.AllTypes())
            {
                if (type == pluginType || !type.CanBeCastTo(pluginType))
                {
                    continue;
                }

                if (!type.HasConstructors())
                {
                    throw new InvalidProgramException(
                        string.Format("The profile of type: {0} has no accessible constructor!", type));
                }

                registry.AddType(GetLeastSpecificButValidType(pluginType, type), type);
            }
        }

        private Type GetLeastSpecificButValidType(Type plugin, Type type)
        {
            if (plugin.IsGenericTypeDefinition)
            {
                return type.FindFirstInterfaceThatCloses(plugin);
            }

            return plugin;
        }
    }
}