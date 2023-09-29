function EarthModel({ nodes, materials, scale, position, earthRef }) {
	return (
		<group dispose={null} scale={scale} position={position} ref={earthRef}>
			<group name="Sketchfab_Scene">
				<group name="Sketchfab_model" rotation={[-1.54, -0.064, 0]}>
					<group name="root">
						<group
							name="GLTF_SceneRootNode"
							rotation={[Math.PI / 2, 0, 0]}
						>
							<group name="Clouds_1">
								<mesh
									name="Object_4"
									geometry={nodes.Object_4.geometry}
									material={materials.Clouds}
								/>
							</group>
							<group name="Planet_2">
								<mesh
									name="Object_6"
									geometry={nodes.Object_6.geometry}
									material={materials.Planet}
								/>
							</group>
						</group>
					</group>
				</group>
			</group>
		</group>
	);
}

export default EarthModel;
